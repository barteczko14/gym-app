import React from 'react'
import {
	Overlay,
	ModalContainer,
	ModalContent,
	ModalTitle,
	ModalCloseButton,
	ModalButtonGroup,
	ModalButton,
} from '../styled'

interface DeleteConfirmationModalProps {
	handleCloseAddTrainingModal: () => void
	handleDeleteTraining: () => void
}

const DeleteTraining: React.FC<DeleteConfirmationModalProps> = ({
	handleCloseAddTrainingModal,
	handleDeleteTraining,
}) => {
	return (
		<Overlay onClick={handleCloseAddTrainingModal}>
			<ModalContainer>
				<ModalContent>
					<ModalTitle>
						<h5>Potwierdź Usunięcie</h5>
						<ModalCloseButton onClick={handleCloseAddTrainingModal} type='button'>
							X
						</ModalCloseButton>
					</ModalTitle>
					<div>
						<div>Czy na pewno chcesz usunąć ten trening?</div>
						<ModalButtonGroup>
							<ModalButton onClick={handleCloseAddTrainingModal} type='button'>
								Anuluj
							</ModalButton>
							<ModalButton onClick={handleDeleteTraining} type='button'>
								Usuń
							</ModalButton>
						</ModalButtonGroup>
					</div>
				</ModalContent>
			</ModalContainer>
		</Overlay>
	)
}

export default DeleteTraining
