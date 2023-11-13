import React from 'react'
import { Link } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import classes from './TrainingList.module.css'
import { useParams } from 'react-router-dom'

interface ExcerciseData {
	id: number
	name: string
}

interface ExcerciseListProps {
	excercises: ExcerciseData[]
	onDelete: (id: number) => void
}

const ExcerciseList: React.FC<ExcerciseListProps> = ({ excercises, onDelete }) => {
	const params = useParams()
	return (
		<ul className={classes.ul}>
			{excercises.map(excercise => (
				<li className={classes.li} key={excercise.id}>
					<Link className={classes.link} to={`/trening/${params.treningId}/excercise/${excercise.id}`}>
						{excercise.name}
					</Link>
					<Fab size='small' className={classes.removeButton}>
						<RemoveIcon onClick={() => onDelete(excercise.id)} />
					</Fab>
				</li>
			))}
		</ul>
	)
}

export default ExcerciseList
