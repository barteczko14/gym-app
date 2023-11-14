import React from 'react'
import { Link } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import classes from './TrainingList.module.css'

interface TrainingData {
	docId: string
	id: number
	name: string
}

interface TrainingListProps {
	trainings: TrainingData[]
	onDelete: (id: number, docId: string) => void
}
const TrainingList: React.FC<TrainingListProps> = ({ trainings, onDelete }) => {
	return (
		<ul className={classes.ul}>
			{trainings.map(training => (
				<li className={classes.li} key={training.id}>
					<Link className={classes.link} to={`/trening/${training.id}`}>
						{training.name}
					</Link>
					<Fab size='small' className={classes.removeButton}>
						<RemoveIcon onClick={() => onDelete(training.id, training.docId)} />
					</Fab>
				</li>
			))}
		</ul>
	)
}

export default TrainingList
