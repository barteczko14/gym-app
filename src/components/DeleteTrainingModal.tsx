import React from 'react'
import classes from './Modal.module.css'

interface DeleteConfirmationModalProps {
	handleCloseAddTrainingModal: () => void
	handleDeleteTraining: () => void
}

const DeleteTraining: React.FC<DeleteConfirmationModalProps> = ({ handleCloseAddTrainingModal, handleDeleteTraining }) => {
	return (
		<div className={classes.overlay} onClick={handleCloseAddTrainingModal}>
			<div className={classes.modalContainer}>
				<div className={classes.modalContent}>
					<div className={classes.modalTitle}>
						<h5>Potwierdź Usunięcie</h5>
						<button className={classes.modalCloseButton} onClick={handleCloseAddTrainingModal} type='button'>
							X
						</button>
					</div>
					<div className={classes.modalForm}>
						<div>Czy na pewno chcesz usunąć ten trening?</div>
						<div className={classes.modalButtonGroup}>
							<button className={classes.modalButton} onClick={handleCloseAddTrainingModal} type='button'>
								Anuluj
							</button>
							<button className={classes.modalButton} onClick={handleDeleteTraining} type='button'>
								Usuń
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeleteTraining
