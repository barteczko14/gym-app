import React, { useState } from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import classes from './Dashboard.module.css'
import DeleteSerieModal from './DeleteSerieModal'
import AddSerieModal from './AddSerieModal'
import SeriesList from './SeriesList'

interface SerieData {
	id: number
	name: string
	reps: number
	weight: number
}

const Excercise: React.FC = () => {
	const [series, setSeries] = useState<SerieData[]>([
		{ id: 1, name: 'Seria 1', reps: 10, weight: 20 },
		{ id: 2, name: 'Seria 2', reps: 8, weight: 15 },
	])

	const [showAddSerieModal, setShowAddSerieModal] = useState(false)
	const [showDeleteSerieModal, setShowDeleteSerieModal] = useState(false)
	const [selectedSerieId, setSelectedSerieId] = useState<number | null>(null)
	const [newSerieName, setNewSerieName] = useState('')
	const [newReps, setNewReps] = useState(0)
	const [newWeight, setNewWeight] = useState(0)

	const handleDelete = (id: number) => {
		if (!showAddSerieModal) {
			setSelectedSerieId(id)
			setShowDeleteSerieModal(true)
			document.body.classList.add('modalOpen')
		}
	}

	const handleShowAddSerieModal = () => {
		setShowAddSerieModal(true)
		document.body.classList.add('modalOpen')
	}

	const handleCloseAddSerieModal = () => {
		setShowAddSerieModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleNewSerieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewSerieName(e.target.value)
	}

	const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const repsValue = parseInt(e.target.value, 10)

		if (!isNaN(repsValue)) {
			setNewReps(repsValue)
		}
	}
	const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const weightValue = parseInt(e.target.value, 10)

		if (!isNaN(weightValue)) {
			setNewWeight(weightValue)
		}
	}

	const handleAddSerie = (e: React.FormEvent) => {
		e.preventDefault()
		if (newReps && newWeight) {
			const newSerie = { id: series.length + 1, name: newSerieName, reps: newReps, weight: newWeight }
			setSeries([...series, newSerie])
			handleCloseAddSerieModal()
		}
	}

	const handleCloseDeleteSerieModal = () => {
		setShowDeleteSerieModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleDeleteTrainingConfirmed = () => {
		if (selectedSerieId !== null) {
			setSeries(series.filter(serie => serie.id !== selectedSerieId))
			setSelectedSerieId(null)
			setShowDeleteSerieModal(false)
		}
	}

	return (
		<div className={classes.dashboard}>
			<h2 className={classes.title}>Serie</h2>
			<SeriesList series={series} onDelete={handleDelete} />
			<Fab className={classes.addButton}>
				<AddIcon onClick={handleShowAddSerieModal} />
			</Fab>
			{showAddSerieModal && (
				<AddSerieModal
					handleCloseAddSerieModal={handleCloseAddSerieModal}
					handleAddSerie={handleAddSerie}
					handleNewSerieChange={handleNewSerieChange}
					handleRepsChange={handleRepsChange}
					handleWeightChange={handleWeightChange}
				/>
			)}
			{showDeleteSerieModal && (
				<DeleteSerieModal
					handleCloseAddSerieModal={handleCloseDeleteSerieModal}
					handleDeleteSerie={handleDeleteTrainingConfirmed}
				/>
			)}
		</div>
	)
}

export default Excercise
