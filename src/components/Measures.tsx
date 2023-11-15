import React, { useState, useEffect } from 'react'
import './Measures.css'
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
		<div className='container'>
			<h2 className='title'>Pomiary</h2>
			<div className='measures-container'>
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
				<div className='new-weight-container'>
					<label className='new-weight-label'>Nowa Waga:</label>
					<input
						type='number'
						value={newWeight}
						onChange={e => setNewWeight(e.target.value)}
						className='new-weight-input'
					/>
					<label className='new-weight-label'>Nowa Data:</label>
					<input type='date' value={newDate} onChange={e => setNewDate(e.target.value)} className='new-weight-input' />
					<button onClick={handleAddWeight} className='add-weight-button'>
						Dodaj Wagę
					</button>
				</div>
			</div>
		</div>
	)
}

export default Measures
