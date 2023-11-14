import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import classes from './Dashboard.module.css'
import AddExcerciseModal from './AddExcerciseModal'
import { Link } from 'react-router-dom'
import ExcerciseList from './ExcerciseList'
import DeleteExcerciseModal from './DeleteExcerciseModal'
import { useParams } from 'react-router-dom'
import {
	collection,
	getDocs,
	query,
	addDoc,
	DocumentData,
	doc,
	QueryDocumentSnapshot,
	deleteDoc,
} from 'firebase/firestore'

import { db } from '../firebase'

interface ExcerciseData {
	docId: string
	trainingId: number
	id: number
	name: string
}

const Training = () => {
	const [excercises, setExcercises] = useState<ExcerciseData[]>([])
	const [showAddExcerciseModal, setShowAddExcerciseModal] = useState(false)
	const [showDeleteExcerciseModal, setShowDeleteExcerciseModal] = useState(false)
	const [selectedExcerciseId, setSelectedExcerciseId] = useState<number | null>(null)
	const [selectedDocumentId, setSelectedDocumentId] = useState<string>('')
	const [newExcerciseName, setNewExcerciseName] = useState('')
	const params = useParams()
	const collectionRef = collection(db, 'excercises')

	useEffect(() => {
		const getExcercises = async (trainingId: number) => {
			try {
				const q = query(collectionRef)
				const excercisesSnapshot = await getDocs(q)

				const excercisesData = excercisesSnapshot.docs
					.filter(doc => doc.data().trainingId === trainingId)
					.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
						docId: doc.id,
						id: doc.data().id,
						name: doc.data().name,
					})) as ExcerciseData[]

				setExcercises(excercisesData)
			} catch (err) {
				console.error('Błąd podczas pobierania ćwiczeń:', err)
			}
		}

		const trainingId = Number(params.treningId)
		getExcercises(trainingId)
	}, [])

	const handleDelete = (id: number, docId: string) => {
		if (!showAddExcerciseModal) {
			setSelectedExcerciseId(id)
			setSelectedDocumentId(docId)
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

	const handleAddExcercise = async (e: React.FormEvent) => {
		e.preventDefault()
		if (newExcerciseName) {
			try {
				const rndInt = Math.floor(Math.random() * 10000) + 1
				const newExcercise: ExcerciseData = {
					docId: '',
					trainingId: 1,
					id: rndInt,
					name: newExcerciseName,
				}
				setExcercises([...excercises, newExcercise])
				await addDoc(collectionRef, {
					id: rndInt,
					trainingId: Number(params.treningId),
					name: newExcerciseName,
				})
				setNewExcerciseName('')
				handleCloseAddExcerciseModal()
			} catch (error) {
				console.error('Błąd podczas dodawania treningu:', error)
			}
		}
	}

	const handleCloseDeleteExcerciseModal = () => {
		setShowDeleteExcerciseModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleDeleteExcerciseConfirmed = async () => {
		if (selectedExcerciseId !== null) {
			setExcercises(excercises.filter(excercise => excercise.id !== selectedExcerciseId))
			try {
				const documentRef = doc(db, 'excercises', selectedDocumentId)
				await deleteDoc(documentRef)
			} catch (err) {
				console.log(err)
			}
			setSelectedExcerciseId(null)
			handleCloseDeleteExcerciseModal()
		}
	}

	return (
		<div className={classes.dashboard}>
			<h2 className={classes.title}>Lista Ćwiczeń</h2>
			<Link className={classes.backBtn} to={`/`}>
				<ArrowBackIcon fontSize="large"/>
			</Link>
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
