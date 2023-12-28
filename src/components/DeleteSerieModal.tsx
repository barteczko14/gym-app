import React from 'react'
import {
	ModalContainer,
	Overlay,
	ModalContent,
	ModalTitle,
	ModalCloseButton,
	ModalButtonGroup,
	ModalButton,
} from '../styled'

interface DeleteSerieModalProps {
	handleCloseAddSerieModal: () => void
	handleDeleteSerie: () => void
}

const DeleteSerieModal: React.FC<DeleteSerieModalProps> = ({ handleCloseAddSerieModal, handleDeleteSerie }) => {
	return (
		<Overlay onClick={handleCloseAddSerieModal}>
			<ModalContainer>
				<ModalContent>
					<ModalTitle>
						<h5>Potwierdź Usunięcie</h5>
						<ModalCloseButton onClick={handleCloseAddSerieModal} type='button'>
							X
						</ModalCloseButton>
					</ModalTitle>
					<div>
						<div>Czy na pewno chcesz usunąć tą serię?</div>
						<ModalButtonGroup>
							<ModalButton onClick={handleCloseAddSerieModal} type='button'>
								Anuluj
							</ModalButton>
							<ModalButton onClick={handleDeleteSerie} type='button'>
								Usuń
							</ModalButton>
						</ModalButtonGroup>
					</div>
				</ModalContent>
			</ModalContainer>
		</Overlay>
	)
}

export default DeleteSerieModal
