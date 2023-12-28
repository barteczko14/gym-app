import React from 'react'
import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove'
import EditIcon from '@mui/icons-material/Edit'
import Fab from '@mui/material/Fab'
import { Ul, Li } from '../styled'

interface SerieData {
	id: number
	name: string
	reps: number
	weight: number
	docId: string
	trainingId: number
	excerciseId: number
}

interface SerieListProps {
	series: SerieData[]
	onDelete: (id: number, docId: string) => void
	onEdit: (id: number, docId: string) => void
}

const Buttons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`
const StyledText = styled.span`
	font-weight: 600;
`

const ExcerciseList: React.FC<SerieListProps> = ({ series, onDelete, onEdit }) => {
	return (
		<Ul>
			{series.map(serie => (
				<Li key={serie.id}>
					<div>
						<StyledText>{serie.name}</StyledText>
						<div>Waga: {serie.weight} kg</div>
						<div>Liczba powtórzeń: {serie.reps}</div>
					</div>
					<Buttons>
						<Fab size='small'>
							<EditIcon onClick={() => onEdit(serie.id, serie.docId)} />
						</Fab>
						<Fab size='small'>
							<RemoveIcon onClick={() => onDelete(serie.id, serie.docId)} />
						</Fab>
					</Buttons>
				</Li>
			))}
		</Ul>
	)
}

export default ExcerciseList
