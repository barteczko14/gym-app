import React from 'react'
import classes from './Modal.module.css'

interface DeleteSerieModalProps {
	handleCloseAddSerieModal: () => void
	handleDeleteSerie: () => void
}

const DeleteSerieModal: React.FC<DeleteSerieModalProps> = ({ handleCloseAddSerieModal, handleDeleteSerie }) => {
	return (
		<div className={classes.overlay} onClick={handleCloseAddSerieModal}>
			<div className={classes.modalContainer}>
				<div className={classes.modalContent}>
					<div className={classes.modalTitle}>
						<h5>Potwierdź Usunięcie</h5>
						<button className={classes.modalCloseButton} onClick={handleCloseAddSerieModal} type='button'>
							X
						</button>
					</div>
					<div className={classes.modalForm}>
						<div>Czy na pewno chcesz usunąć tą serię?</div>
						<div className={classes.modalButtonGroup}>
							<button className={classes.modalButton} onClick={handleCloseAddSerieModal} type='button'>
								Anuluj
							</button>
							<button className={classes.modalButton} onClick={handleDeleteSerie} type='button'>
								Usuń
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeleteSerieModal
