import React from 'react'
import { Overlay, ModalContainer, ModalContent, ModalTitle, ModalInput, ModalButtonGroup, ModalButton } from '../styled'

interface AddExcerciseModalProps {
	handleCloseAddExcerciseModal: () => void
	handleAddExcercise: (e: React.FormEvent) => void
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	newExcerciseName: string
}

const AddExcerciseModal: React.FC<AddExcerciseModalProps> = ({
	handleCloseAddExcerciseModal,
	handleAddExcercise,
	handleInputChange,
	newExcerciseName,
}) => {
	return (
		<Overlay>
			<ModalContainer>
				<ModalContent>
					<ModalTitle>
						<h5>Dodaj ćwiczenie</h5>
					</ModalTitle>
					<form>
						<div>
							<ModalInput
								type='text'
								placeholder='Dodaj ćwiczenie'
								value={newExcerciseName}
								onChange={handleInputChange}
							/>
						</div>
						<ModalButtonGroup>
							<ModalButton onClick={handleCloseAddExcerciseModal} type='button'>
								Zamknij
							</ModalButton>
							<ModalButton onClick={handleAddExcercise} type='submit'>
								Dodaj
							</ModalButton>
						</ModalButtonGroup>
					</form>
				</ModalContent>
			</ModalContainer>
		</Overlay>
	)
}

export default AddExcerciseModal
