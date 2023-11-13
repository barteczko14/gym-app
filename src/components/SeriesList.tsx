import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import EditIcon from '@mui/icons-material/Edit'
import Fab from '@mui/material/Fab'
import classes from './TrainingList.module.css'
import { useParams } from 'react-router-dom'

interface SerieData {
	id: number
	name: string
	reps: number
	weight: number
}

interface SerieListProps {
	series: SerieData[]
	onDelete: (id: number) => void
	onEdit: (id: number) => void
}

const ExcerciseList: React.FC<SerieListProps> = ({ series, onDelete, onEdit }) => {
	const params = useParams()
	return (
		<ul className={classes.ul}>
			{series.map(serie => (
				<li className={classes.li} key={serie.id}>
					{serie.name} Waga: {serie.weight} Liczba powtórzeń: {serie.reps}
					<Fab size='small' className={classes.removeButton}>
						<EditIcon onClick={() => onEdit(serie.id)} />
					</Fab>
					<Fab size='small' className={classes.removeButton}>
						<RemoveIcon onClick={() => onDelete(serie.id)} />
					</Fab>
				</li>
			))}
		</ul>
	)
}

export default ExcerciseList
