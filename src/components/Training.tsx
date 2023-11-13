import React, { useState } from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import classes from './Dashboard.module.css'
import AddExcerciseModal from './AddExcerciseModal'
import ExcerciseList from './ExcerciseList'
import DeleteExcerciseModal from './DeleteExcerciseModal'

interface ExcerciseData {
	id: number
	name: string
}

const Training = () => {
	const [excercises, setExcercises] = useState<ExcerciseData[]>([
		{ id: 1, name: 'Ćwiczenie 1' },
		{ id: 2, name: 'Ćwiczenie 2' },
	])

	const [showAddExcerciseModal, setShowAddExcerciseModal] = useState(false)
	const [showDeleteExcerciseModal, setShowDeleteExcerciseModal] = useState(false)
	const [selectedExcerciseId, setSelectedExcerciseId] = useState<number | null>(null)
	const [newExcerciseName, setNewExcerciseName] = useState('')

	const handleDelete = (id: number) => {
		if (!showAddExcerciseModal) {
			setSelectedExcerciseId(id)
			setShowDeleteExcerciseModal(true)
			document.body.classList.add('modalOpen')
		}
	}

	const handleShowAddExcerciseModal = () => {
		setShowAddExcerciseModal(true)
		document.body.classList.add('modalOpen')
	}

	const handleCloseAddExcerciseModal = () => {
		setShowAddExcerciseModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewExcerciseName(e.target.value)
	}

	const handleAddExcercise = (e: React.FormEvent) => {
		e.preventDefault()
		if (newExcerciseName) {
			const newExcercise = { id: excercises.length + 1, name: newExcerciseName }
			setExcercises([...excercises, newExcercise])
			setNewExcerciseName('')
			handleCloseAddExcerciseModal()
		}
	}

	const handleCloseDeleteExcerciseModal = () => {
		setShowDeleteExcerciseModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleDeleteExcerciseConfirmed = () => {
		if (selectedExcerciseId !== null) {
			setExcercises(excercises.filter(training => training.id !== selectedExcerciseId))
			setSelectedExcerciseId(null)
			handleCloseDeleteExcerciseModal()
		}
	}

	return (
		<div className={classes.dashboard}>
			<h2 className={classes.title}>Lista Ćwiczeń</h2>
			<ExcerciseList excercises={excercises} onDelete={handleDelete} />
			<Fab className={classes.addButton}>
				<AddIcon onClick={handleShowAddExcerciseModal} />
			</Fab>
			{showAddExcerciseModal && (
				<AddExcerciseModal
					handleCloseAddExcerciseModal={handleCloseAddExcerciseModal}
					handleAddExcercise={handleAddExcercise}
					handleInputChange={handleInputChange}
					newExcerciseName={newExcerciseName}
				/>
			)}
			{showDeleteExcerciseModal && (
				<DeleteExcerciseModal
					handleCloseAddExcerciseModal={handleCloseDeleteExcerciseModal}
					handleDeleteExcercise={handleDeleteExcerciseConfirmed}
				/>
			)}
		</div>
	)
}

export default Training
