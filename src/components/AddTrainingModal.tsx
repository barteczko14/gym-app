import React from 'react'
import { Overlay, ModalContainer, ModalContent, ModalTitle, ModalInput, ModalButtonGroup, ModalButton } from '../styled'

interface AddTrainingModalProps {
	handleCloseAddTrainingModal: () => void
	handleAddTraining: (e: React.FormEvent) => void
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	newTrainingName: string
}

const AddTrainingModal: React.FC<AddTrainingModalProps> = ({
	handleCloseAddTrainingModal,
	handleAddTraining,
	handleInputChange,
	newTrainingName,
}) => {
	return (
		<Overlay>
			<ModalContainer>
				<ModalContent>
					<ModalTitle>
						<h5>Dodaj Trening</h5>
					</ModalTitle>
					<form>
						<div>
							<ModalInput
								type='text'
								placeholder='Dodaj Trening'
								value={newTrainingName}
								onChange={handleInputChange}
							/>
						</div>
						<ModalButtonGroup>
							<ModalButton onClick={handleCloseAddTrainingModal} type='button'>
								Zamknij
							</ModalButton>
							<ModalButton onClick={handleAddTraining} type='submit'>
								Dodaj
							</ModalButton>
						</ModalButtonGroup>
					</form>
				</ModalContent>
			</ModalContainer>
		</Overlay>
	)
}

export default AddTrainingModal
