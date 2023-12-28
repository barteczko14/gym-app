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

interface DeleteExcerciseModalProps {
	handleCloseAddExcerciseModal: () => void
	handleDeleteExcercise: () => void
}

const DeleteExcerciseModal: React.FC<DeleteExcerciseModalProps> = ({
	handleCloseAddExcerciseModal,
	handleDeleteExcercise,
}) => {
	return (
		<Overlay onClick={handleCloseAddExcerciseModal}>
			<ModalContainer>
				<ModalContent>
					<ModalTitle>
						<h5>Potwierdź Usunięcie</h5>
						<ModalCloseButton onClick={handleCloseAddExcerciseModal} type='button'>
							X
						</ModalCloseButton>
					</ModalTitle>
					<div>
						<div>Czy na pewno chcesz usunąć to ćwiczenie?</div>
						<ModalButtonGroup>
							<ModalButton onClick={handleCloseAddExcerciseModal} type='button'>
								Anuluj
							</ModalButton>
							<ModalButton onClick={handleDeleteExcercise} type='button'>
								Usuń
							</ModalButton>
						</ModalButtonGroup>
					</div>
				</ModalContent>
			</ModalContainer>
		</Overlay>
	)
}

export default DeleteExcerciseModal
