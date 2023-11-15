import React from 'react'
import classes from './Modal.module.css'

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
		<div className={classes.overlay}>
			<div className={classes.modalContainer}>
				<div className={classes.modalContent}>
					<div className={classes.modalTitle}>
						<h5>Dodaj Trening</h5>
					</div>
					<form>
						<div>
							<input
								className={classes.modalInput}
								type='text'
								placeholder='Dodaj Trening'
								value={newTrainingName}
								onChange={handleInputChange}
							/>
						</div>
						<div className={classes.modalButtonGroup}>
							<button className={classes.modalButton} onClick={handleCloseAddTrainingModal} type='button'>
								Zamknij
							</button>
							<button onClick={handleAddTraining} className={classes.modalButton} type='submit'>
								Dodaj
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddTrainingModal
