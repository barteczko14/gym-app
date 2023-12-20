import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Title } from '../styled'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import {
	collection,
	getDocs,
	query,
	addDoc,
	orderBy,
	limit,
	DocumentData,
	QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '../firebase'

interface WeightData {
	id: string
	weight: number
	date: number
}

const AddWeightBtn = styled.button`
	margin: 10px;
	padding: 8px 16px;
	font-size: 16px;
	background-color: #9c27b0;
	color: #fff;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: #7c2ca7;
	}
`
const NewWeightContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 300px;
	margin: 20px auto;
`
const NewWeightLabel = styled.label`
	font-size: 16px;
	margin-bottom: 8px;
`

const NewWeightInput = styled.input`
	padding: 8px;
	margin-bottom: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 14px;
`

const MeasuresContainer = styled.div`
	display: block;
	margin: 10px;
	padding: 10px 0px;
	background-color: #f4f4f4;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Measures: React.FC = () => {
	const [weightData, setWeightData] = useState<WeightData[]>([])
	const [newWeight, setNewWeight] = useState<string>('')
	const [newDate, setNewDate] = useState<string>('')

	const collectionRef = collection(db, 'weight')

	useEffect(() => {
		const getData = async () => {
			try {
				const q = query(collectionRef, orderBy('date', 'asc'), limit(10))

				const seriesSnapshot = await getDocs(q)

				const weightsData = seriesSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
					id: doc.id,
					date: doc.data().date,
					weight: doc.data().weight,
				})) as WeightData[]

				setWeightData(weightsData)
			} catch (err) {
				console.error('Błąd podczas pobierania serii:', err)
			}
		}
		getData()
	}, [newWeight])

	const handleAddWeight = async () => {
		if (parseFloat(newWeight) > 0 && newDate !== '') {
			const date = new Date(newDate).getTime()
			try {
				await addDoc(collectionRef, { weight: parseFloat(newWeight), date })
				setNewWeight('')
				setNewDate('')
			} catch (error) {
				console.error('Błąd podczas dodawania wagi:', error)
			}
		}
	}

	return (
		<>
			<Title>Pomiary</Title>
			<MeasuresContainer>
				<ResponsiveContainer className='chart-container' width='95%' height={280}>
					<LineChart data={weightData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis
							dataKey='date'
							type='number'
							domain={['auto', 'auto']}
							tickFormatter={unixTime => new Date(unixTime).toLocaleDateString()}
						/>
						<YAxis type='number' domain={['auto', 'auto']} />
						<Tooltip />
						<ReferenceLine y={0} stroke='#000' />
						<Line type='monotone' dataKey='weight' stroke='#8884d8' activeDot={{ r: 8 }} />
					</LineChart>
				</ResponsiveContainer>
				<NewWeightContainer>
					<NewWeightLabel>Nowa Waga:</NewWeightLabel>
					<NewWeightInput type='number' value={newWeight} onChange={e => setNewWeight(e.target.value)} />
					<NewWeightLabel>Nowa Data:</NewWeightLabel>
					<NewWeightInput type='date' value={newDate} onChange={e => setNewDate(e.target.value)} />
					<AddWeightBtn onClick={handleAddWeight}>Dodaj Wagę</AddWeightBtn>
				</NewWeightContainer>
			</MeasuresContainer>
		</>
	)
}

export default Measures
