import React from 'react'
import { Link } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import classes from './TrainingList.module.css'
import { useParams } from 'react-router-dom'

interface SerieData {
	id: number
	name: string,
	reps: number
	weight: number
}

interface SerieListProps {
	series: SerieData[]
	onDelete: (id: number) => void
}

const ExcerciseList: React.FC<SerieListProps> = ({ series, onDelete }) => {
	const params = useParams()
	return (
		<ul className={classes.ul}>
			{series.map(serie => (
				<li className={classes.li} key={serie.id}>
					<Link className={classes.link} to={`/trening/${params.treningId}/excercise/${serie.id}`}>
						{serie.name} Waga: {serie.weight} Liczba powtórzeń:  {serie.reps}
					</Link>
					<Fab size='small' className={classes.removeButton}>
						<RemoveIcon onClick={() => onDelete(serie.id)} />
					</Fab>
				</li>
			))}
		</ul>
	)
}

export default ExcerciseList
