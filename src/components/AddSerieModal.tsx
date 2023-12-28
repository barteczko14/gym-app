import React from 'react'
import { Overlay, ModalContainer, ModalContent, ModalTitle, ModalInput, ModalButtonGroup, ModalButton } from '../styled'

interface AddSerieModalProps {
	handleCloseAddSerieModal: () => void
	handleAddSerie: (e: React.FormEvent) => void
	handleNewSerieChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRepsChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AddSerieModal: React.FC<AddSerieModalProps> = ({
	handleCloseAddSerieModal,
	handleAddSerie,
	handleNewSerieChange,
	handleRepsChange,
	handleWeightChange,
}) => {
	return (
		<Overlay>
			<ModalContainer>
				<ModalContent>
					<ModalTitle>
						<h5>Dodaj serię</h5>
					</ModalTitle>
					<form>
						<div>
							<ModalInput type='text' placeholder='Nazwa' onChange={handleNewSerieChange} />
						</div>
						<div>
							<ModalInput type='number' placeholder='Waga' onChange={handleWeightChange} />
						</div>
						<div>
							<ModalInput type='number' placeholder='Liczba powtórzeń' onChange={handleRepsChange} />
						</div>

						<ModalButtonGroup>
							<ModalButton onClick={handleCloseAddSerieModal} type='button'>
								Zamknij
							</ModalButton>
							<ModalButton onClick={handleAddSerie} type='submit'>
								Dodaj
							</ModalButton>
						</ModalButtonGroup>
					</form>
				</ModalContent>
			</ModalContainer>
		</Overlay>
	)
}

export default AddSerieModal
