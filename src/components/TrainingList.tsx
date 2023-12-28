import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import { Ul, Li } from '../styled'

interface TrainingData {
	docId: string
	id: number
	name: string
}

interface TrainingListProps {
	trainings: TrainingData[]
	onDelete: (id: number, docId: string) => void
}
const StyledLink = styled(Link)`
	text-decoration: none;
`

const TrainingList: React.FC<TrainingListProps> = ({ trainings, onDelete }) => {
	return (
		<Ul>
			{trainings.map(training => (
				<Li key={training.id}>
					<StyledLink to={`/training/${training.id}`}>{training.name}</StyledLink>
					<Fab size='small'>
						<RemoveIcon onClick={() => onDelete(training.id, training.docId)} />
					</Fab>
				</Li>
			))}
		</Ul>
	)
}

export default TrainingList
