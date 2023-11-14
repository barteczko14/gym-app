import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import EditIcon from '@mui/icons-material/Edit'
import Fab from '@mui/material/Fab'
import classes from './TrainingList.module.css'

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

const ExcerciseList: React.FC<SerieListProps> = ({ series, onDelete, onEdit }) => {
	return (
		<ul className={classes.ul}>
			{series.map(serie => (
				<li className={classes.li} key={serie.id}>
					<div>
						<div className={classes.textBold}>{serie.name}</div>
						<div>Waga: {serie.weight} kg</div>
						<div>Liczba powtórzeń: {serie.reps}</div>
					</div>
					<div className={classes.buttons}>
						<Fab size='small' className={classes.removeButton}>
							<EditIcon onClick={() => onEdit(serie.id, serie.docId)} />
						</Fab>
						<Fab size='small' className={classes.removeButton}>
							<RemoveIcon onClick={() => onDelete(serie.id, serie.docId)} />
						</Fab>
					</div>
				</li>
			))}
		</ul>
	)
}

export default ExcerciseList
