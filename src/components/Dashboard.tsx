import React, { useState } from 'react'
import TrainingList from './TrainingList'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import classes from './Dashboard.module.css'
import AddTrainingModal from './AddTrainingModal'
import DeleteTrainingModal from './DeleteTrainingModal'

interface TrainingData {
	id: number
	name: string
}

const Dashboard = () => {
	const [trainings, setTrainings] = useState<TrainingData[]>([
		{ id: 1, name: 'Trening 1' },
		{ id: 2, name: 'Trening 2' },
	])

	const [showAddTrainingModal, setShowAddTrainingModal] = useState(false)
	const [showDeleteTrainingModal, setShowDeleteTrainingModal] = useState(false)
	const [selectedTrainingId, setSelectedTrainingId] = useState<number | null>(null)
	const [newTrainingName, setNewTrainingName] = useState('')

	const handleDelete = (id: number) => {
		if (!showAddTrainingModal) {
			setSelectedTrainingId(id)
			setShowDeleteTrainingModal(true)
			document.body.classList.add('modalOpen')
		}
	}

	const handleShowAddTrainingModal = () => {
		setShowAddTrainingModal(true)
		document.body.classList.add('modalOpen')
	}

	const handleCloseAddTrainingModal = () => {
		setShowAddTrainingModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTrainingName(e.target.value)
	}

	const handleAddTraining = (e: React.FormEvent) => {
		e.preventDefault()
		if (newTrainingName) {
			const newTraining = { id: trainings.length + 1, name: newTrainingName }
			setTrainings([...trainings, newTraining])
			setNewTrainingName('')
			handleCloseAddTrainingModal()
		}
	}

	const handleCloseDeleteTrainingModal = () => {
		setShowDeleteTrainingModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleDeleteTrainingConfirmed = () => {
		if (selectedTrainingId !== null) {
			setTrainings(trainings.filter(training => training.id !== selectedTrainingId))
			setSelectedTrainingId(null)
			handleCloseDeleteTrainingModal()
		}
	}

	return (
		<div className={classes.dashboard}>
			<h2 className={classes.title}>Lista Treningów</h2>
			<TrainingList trainings={trainings} onDelete={handleDelete} />
			<Fab className={classes.addButton}>
				<AddIcon onClick={handleShowAddTrainingModal} />
			</Fab>
			{showAddTrainingModal && (
				<AddTrainingModal
					handleCloseAddTrainingModal={handleCloseAddTrainingModal}
					handleAddTraining={handleAddTraining}
					handleInputChange={handleInputChange}
					newTrainingName={newTrainingName}
				/>
			)}
			{showDeleteTrainingModal && (
				<DeleteTrainingModal
					handleCloseAddTrainingModal={handleCloseDeleteTrainingModal}
					handleDeleteTraining={handleDeleteTrainingConfirmed}
				/>
			)}
		</div>
	)
}

export default Dashboard
