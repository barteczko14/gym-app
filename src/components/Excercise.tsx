import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import classes from './Dashboard.module.css'
import DeleteSerieModal from './DeleteSerieModal'
import AddSerieModal from './AddSerieModal'
import { Link } from 'react-router-dom'
import SeriesList from './SeriesList'
import EditSerieModal from './EditSeriesModal'
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
	updateDoc
} from 'firebase/firestore'

import { db } from '../firebase'

interface SerieData {
	id: number
	name: string
	reps: number
	weight: number
	docId: string
	trainingId: number
	excerciseId: number
}

const Excercise: React.FC = () => {
	const [series, setSeries] = useState<SerieData[]>([])
	const [showAddSerieModal, setShowAddSerieModal] = useState(false)
	const [showDeleteSerieModal, setShowDeleteSerieModal] = useState(false)
	const [showEditSerieModal, setShowEditSerieModal] = useState(false)
	const [selectedSerieId, setSelectedSerieId] = useState<number | null>(null)
	const [selectedDocumentId, setSelectedDocumentId] = useState<string>('')
	const [newSerieName, setNewSerieName] = useState('')
	const [newReps, setNewReps] = useState(0)
	const [newWeight, setNewWeight] = useState(0)
	const params = useParams()
	const collectionRef = collection(db, 'series')

	useEffect(() => {
		const getSeries = async (trainingId: number, excerciseId: number) => {
			try {
				const q = query(collectionRef)
				const seriesSnapshot = await getDocs(q)

				const seriesData = seriesSnapshot.docs
					.filter(doc => doc.data().trainingId === trainingId && doc.data().excerciseId === excerciseId)
					.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
						docId: doc.id,
						id: doc.data().id,
						name: doc.data().name,
						reps: doc.data().reps,
						weight: doc.data().weight,
					})) as SerieData[]

				setSeries(seriesData)
			} catch (err) {
				console.error('Błąd podczas pobierania serii:', err)
			}
		}

		const trainingId = Number(params.treningId)
		const excerciseId = Number(params.excerciseId)
		getSeries(trainingId, excerciseId)
	}, [])

	const handleDelete = (id: number, docId: string) => {
		if (!showAddSerieModal) {
			setSelectedSerieId(id)
			setSelectedDocumentId(docId)
			setShowDeleteSerieModal(true)
			document.body.classList.add('modalOpen')
		}
	}
	const handleEdit = (id: number, docId: string) => {
		const editingSerie = series.find(serie => serie.id === id)

		if (editingSerie) {
			setNewSerieName(editingSerie.name)
			setNewReps(editingSerie.reps)
			setNewWeight(editingSerie.weight)
			setSelectedSerieId(id)
			setSelectedDocumentId(docId)
			setShowEditSerieModal(true)
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
	const handleCloseEditSerieModal = () => {
		setShowEditSerieModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleNewSerieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewSerieName(e.target.value)
	}

	const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const repsValue = parseFloat(e.target.value)

		if (!isNaN(repsValue)) {
			setNewReps(repsValue)
		}
	}
	const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const weightValue = parseFloat(e.target.value)

		if (!isNaN(weightValue)) {
			setNewWeight(weightValue)
		}
	}

	const handleAddSerie = async (e: React.FormEvent) => {
		e.preventDefault()
		if (newSerieName) {
			try {
				const rndInt = Math.floor(Math.random() * 10000) + 1
				const newSerie: SerieData = {
					docId: '',
					trainingId: 1,
					excerciseId: 1,
					id: rndInt,
					name: newSerieName,
					reps: newReps,
					weight: newWeight,
				}
				setSeries([...series, newSerie])
				await addDoc(collectionRef, {
					id: rndInt,
					trainingId: Number(params.treningId),
					excerciseId: Number(params.excerciseId),
					name: newSerieName,
					reps: newReps,
					weight: newWeight,
				})
				setNewSerieName('')
				handleCloseAddSerieModal()
			} catch (error) {
				console.error('Błąd podczas dodawania treningu:', error)
			}
		}
	}

	const handleEditSerie = async (e: React.FormEvent) => {
		e.preventDefault();
		if (newReps !== undefined && newWeight !== undefined && newSerieName !== '') {
		  try {
			const editedSeries = series.map((serie) =>
			  serie.id === selectedSerieId ? { ...serie, name: newSerieName, reps: newReps, weight: newWeight } : serie
			);
			setSeries(editedSeries);
	  
			const documentRef = doc(collectionRef, selectedDocumentId);
			await updateDoc(documentRef, {
			  name: newSerieName,
			  reps: newReps,
			  weight: newWeight,
			});
	  
			handleCloseEditSerieModal();
		  } catch (error) {
			console.error('Błąd podczas edycji serii:', error);
		  }
		}
	  };
	  
	  

	const handleCloseDeleteSerieModal = () => {
		setShowDeleteSerieModal(false)
		document.body.classList.remove('modalOpen')
	}

	const handleDeleteSerieConfirmed = async () => {
		if (selectedSerieId !== null) {
			setSeries(series.filter(serie => serie.id !== selectedSerieId))
			try {
				const documentRef = doc(db, 'series', selectedDocumentId)
				await deleteDoc(documentRef)
			} catch (err) {
				console.log(err)
			}
			setSelectedSerieId(null)
			handleCloseDeleteSerieModal()
		}
	}

	return (
		<div className={classes.dashboard}>
			<h2 className={classes.title}>Serie</h2>
				<Link className={classes.backBtn} to={`/trening/${params.treningId}`}>
				<ArrowBackIcon fontSize="large"/>
				</Link>
			<SeriesList series={series} onDelete={handleDelete} onEdit={handleEdit} />
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
					handleDeleteSerie={handleDeleteSerieConfirmed}
				/>
			)}
			{showEditSerieModal && (
				<EditSerieModal
					handleCloseEditSerieModal={handleCloseEditSerieModal}
					handleEditSerie={handleEditSerie}
					handleNewSerieChange={handleNewSerieChange}
					handleRepsChange={handleRepsChange}
					handleWeightChange={handleWeightChange}
					oldSerieName={newSerieName}
					oldReps={newReps}
					oldWeight={newWeight}
				/>
			)}
		</div>
	)
}

export default Excercise
