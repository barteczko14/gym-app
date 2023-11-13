import React, { useState, useEffect } from 'react'
import classes from './Modal.module.css'

interface EditSerieModalProps {
	handleCloseEditSerieModal: () => void
	handleEditSerie: (e: React.FormEvent) => void
	handleNewSerieChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRepsChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	oldSerieName: string
	oldReps: number
	oldWeight: number
}

const EditSerieModal: React.FC<EditSerieModalProps> = ({
	handleCloseEditSerieModal,
	handleEditSerie,
	handleNewSerieChange,
	handleRepsChange,
	handleWeightChange,
	oldSerieName,
	oldReps,
	oldWeight,
}) => {
	const [editedSerieName, setEditedSerieName] = useState(oldSerieName)
	const [editedReps, setEditedReps] = useState(oldReps !== null ? oldReps : '')
	const [editedWeight, setEditedWeight] = useState(oldWeight !== null ? oldWeight : '')

	useEffect(() => {
		setEditedSerieName(oldSerieName)
		setEditedReps(oldReps !== null ? oldReps : '')
		setEditedWeight(oldWeight !== null ? oldWeight : '')
	}, [oldSerieName, oldReps, oldWeight])

	const handleSave = (e: React.FormEvent) => {
		e.preventDefault()
	}

	return (
		<div className={classes.overlay}>
			<div className={classes.modalContainer}>
				<div className={classes.modalContent}>
					<div className={classes.modalTitle}>
						<h5>Edytuj serię</h5>
					</div>
					<form onSubmit={handleSave}>
						<div>
							<label htmlFor='serieName'>Nazwa:</label>
							<input
								id='serieName'
								className={classes.modalInput}
								type='text'
								placeholder='Nazwa'
								value={editedSerieName}
								onChange={e => {
									setEditedSerieName(e.target.value)
									handleNewSerieChange(e)
								}}
							/>
						</div>
						<div>
							<label htmlFor='serieReps'>Liczba powtórzeń:</label>
							<input
								id='serieReps'
								className={classes.modalInput}
								type='text'
								placeholder='Liczba powtórzeń'
								value={editedReps}
								onChange={e => {
									const value = e.target.value
									setEditedReps(e.target.value.replace(/,/g, '.'))
									handleRepsChange(e)
								}}
							/>
						</div>
						<div>
							<label htmlFor='serieWeight'>Waga:</label>
							<input
								id='serieWeight'
								className={classes.modalInput}
								type='text'
								placeholder='Waga'
								value={editedWeight}
								onChange={e => {
									const value = e.target.value
									setEditedWeight(e.target.value.replace(/,/g, '.'))
									handleWeightChange(e)
								}}
							/>
						</div>
						<div className={classes.modalButtonGroup}>
							<button className={classes.modalButton} onClick={handleCloseEditSerieModal} type='button'>
								Zamknij
							</button>
							<button onClick={handleEditSerie} className={classes.modalButton} type='submit'>
								Edytuj
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default EditSerieModal
