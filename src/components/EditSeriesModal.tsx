import React, { useState, useEffect } from 'react'
import { Overlay, ModalContainer, ModalContent, ModalTitle, ModalInput, ModalButtonGroup, ModalButton } from '../styled'

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
		<Overlay>
			<ModalContainer>
				<ModalContent>
					<ModalTitle>
						<h5>Edytuj serię</h5>
					</ModalTitle>
					<form onSubmit={handleSave}>
						<div>
							<label htmlFor='serieName'>Nazwa:</label>
							<ModalInput
								id='serieName'
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
							<label htmlFor='serieWeight'>Waga:</label>
							<ModalInput
								id='serieWeight'
								type='number'
								placeholder='Waga'
								value={editedWeight}
								onChange={e => {
									const value = e.target.value
									setEditedWeight(e.target.value.replace(/,/g, '.'))
									handleWeightChange(e)
								}}
							/>
						</div>
						<div>
							<label htmlFor='serieReps'>Liczba powtórzeń:</label>
							<ModalInput
								id='serieReps'
								type='number'
								placeholder='Liczba powtórzeń'
								value={editedReps}
								onChange={e => {
									const value = e.target.value
									setEditedReps(e.target.value.replace(/,/g, '.'))
									handleRepsChange(e)
								}}
							/>
						</div>

						<ModalButtonGroup>
							<ModalButton onClick={handleCloseEditSerieModal} type='button'>
								Zamknij
							</ModalButton>
							<ModalButton onClick={handleEditSerie} type='submit'>
								Edytuj
							</ModalButton>
						</ModalButtonGroup>
					</form>
				</ModalContent>
			</ModalContainer>
		</Overlay>
	)
}

export default EditSerieModal
