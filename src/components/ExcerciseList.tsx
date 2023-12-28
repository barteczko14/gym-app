import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import { Ul, Li } from '../styled'
import { useParams } from 'react-router-dom'

interface ExcerciseData {
	docId: string
	trainingId: number
	id: number
	name: string
}

interface ExcerciseListProps {
	excercises: ExcerciseData[]
	onDelete: (id: number, docId: string) => void
}
const StyledLink = styled(Link)`
	text-decoration: none;
`

const ExcerciseList: React.FC<ExcerciseListProps> = ({ excercises, onDelete }) => {
	const params = useParams()
	return (
		<Ul>
			{excercises.map(excercise => (
				<Li key={excercise.id}>
					<StyledLink to={`/training/${params.trainingId}/excercise/${excercise.id}`}>{excercise.name}</StyledLink>
					<Fab size='small'>
						<RemoveIcon onClick={() => onDelete(excercise.id, excercise.docId)} />
					</Fab>
				</Li>
			))}
		</Ul>
	)
}

export default ExcerciseList
