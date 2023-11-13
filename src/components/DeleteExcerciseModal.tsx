import React from 'react'
import classes from './Modal.module.css'

interface DeleteExcerciseModalProps {
	handleCloseAddExcerciseModal: () => void
	handleDeleteExcercise: () => void
}

const DeleteExcerciseModal: React.FC<DeleteExcerciseModalProps> = ({ handleCloseAddExcerciseModal, handleDeleteExcercise }) => {
	return (
		<div className={classes.overlay} onClick={handleCloseAddExcerciseModal}>
			<div className={classes.modalContainer}>
				<div className={classes.modalContent}>
					<div className={classes.modalTitle}>
						<h5>Potwierdź Usunięcie</h5>
						<button className={classes.modalCloseButton} onClick={handleCloseAddExcerciseModal} type='button'>
							X
						</button>
					</div>
					<div className={classes.modalForm}>
						<div>Czy na pewno chcesz usunąć to ćwiczenie?</div>
						<div className={classes.modalButtonGroup}>
							<button className={classes.modalButton} onClick={handleCloseAddExcerciseModal} type='button'>
								Anuluj
							</button>
							<button className={classes.modalButton} onClick={handleDeleteExcercise} type='button'>
								Usuń
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeleteExcerciseModal
