import React from 'react'
import { Link } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import classes from './TrainingList.module.css'
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

const ExcerciseList: React.FC<ExcerciseListProps> = ({ excercises, onDelete }) => {
	const params = useParams()
	return (
		<ul className={classes.ul}>
			{excercises.map(excercise => (
				<li className={classes.li} key={excercise.id}>
					<Link className={classes.link} to={`/training/${params.trainingId}/excercise/${excercise.id}`}>
						{excercise.name}
					</Link>
					<Fab size='small' className={classes.removeButton}>
						<RemoveIcon onClick={() => onDelete(excercise.id, excercise.docId)} />
					</Fab>
				</li>
			))}
		</ul>
	)
}

export default ExcerciseList
