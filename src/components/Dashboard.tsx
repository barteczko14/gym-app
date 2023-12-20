import React, { useState, useEffect } from 'react'
import { Title, FirstBtnsContainer, Container } from '../styled'
import TrainingList from './TrainingList'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import AddTrainingModal from './AddTrainingModal'
import DeleteTrainingModal from './DeleteTrainingModal'
import {
	collection,
	getDocs,
	query,
	addDoc,
	DocumentData,
	doc,
	QueryDocumentSnapshot,
	deleteDoc,
	orderBy,
} from 'firebase/firestore'

import { db } from '../firebase'

interface TrainingData {
	docId: string
	id: number
	name: string
}

const Dashboard = () => {
	const [trainings, setTrainings] = useState<TrainingData[]>([])
	const [showAddTrainingModal, setShowAddTrainingModal] = useState(false)
	const [showDeleteTrainingModal, setShowDeleteTrainingModal] = useState(false)
	const [selectedTrainingId, setSelectedTrainingId] = useState<number | null>(null)
	const [selectedDocumentId, setSelectedDocumentId] = useState<string>('')
	const [newTrainingName, setNewTrainingName] = useState('')

	const collectionRef = collection(db, 'trainings')

	useEffect(() => {
		const getTrainings = async () => {
			const q = query(collectionRef, orderBy('name', 'asc'))
			try {
				const trainingsSnapshot = await getDocs(q)
				const trainingsData = trainingsSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
					docId: doc.id,
					id: doc.data().id,
					name: doc.data().name,
				})) as TrainingData[]
				setTrainings(trainingsData)
			} catch (err) {
				console.error('Błąd podczas pobierania treningów:', err)
			}
		}

		getTrainings()
	}, [])

	const handleDelete = (id: number, docId: string) => {
		if (!showAddTrainingModal) {
			setSelectedTrainingId(id)
			setSelectedDocumentId(docId)
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

	const handleAddTraining = async (e: React.FormEvent) => {
		e.preventDefault()
		if (newTrainingName) {
			try {
				const rndInt = Math.floor(Math.random() * 10000) + 1
				const newTraining: TrainingData = {
					docId: '',
					id: rndInt,
					name: newTrainingName,
				}
				setTrainings([...trainings, newTraining])
				await addDoc(collectionRef, {
					id: rndInt,
					name: newTrainingName,
				})
				setNewTrainingName('')
				handleCloseAddTrainingModal()
			} catch (error) {
				console.error('Błąd podczas dodawania treningu:', error)
			}
		}
	}

	const handleCloseDeleteTrainingModal = () => {
		setShowDeleteTrainingModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleDeleteTrainingConfirmed = async () => {
		if (selectedTrainingId !== null) {
			setTrainings(trainings.filter(training => training.id !== selectedTrainingId))
			try {
				const documentRef = doc(db, 'trainings', selectedDocumentId)
				await deleteDoc(documentRef)
			} catch (err) {
				console.log(err)
			}
			setSelectedTrainingId(null)
			handleCloseDeleteTrainingModal()
		}
	}

	return (
		<>
			<Container>
				<Title>Lista Treningów</Title>
				<FirstBtnsContainer>
					<Fab color='secondary'>
						<AddIcon onClick={handleShowAddTrainingModal} />
					</Fab>
				</FirstBtnsContainer>

				<TrainingList trainings={trainings} onDelete={handleDelete} />
			</Container>

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
		</>
	)
}

export default Dashboard
