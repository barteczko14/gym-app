import React from 'react'
import classes from './Modal.module.css'

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
		<div className={classes.overlay}>
			<div className={classes.modalContainer}>
				<div className={classes.modalContent}>
					<div className={classes.modalTitle}>
						<h5>Dodaj ćwiczenie</h5>
					</div>
					<form>
						<div>
							<input
								className={classes.modalInput}
								type='text'
								placeholder='Dodaj ćwiczenie'
								value={newExcerciseName}
								onChange={handleInputChange}
							/>
						</div>
						<div className={classes.modalButtonGroup}>
							<button className={classes.modalButton} onClick={handleCloseAddExcerciseModal} type='button'>
								Zamknij
							</button>
							<button onClick={handleAddExcercise} className={classes.modalButton} type='submit'>
								Dodaj
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddExcerciseModal
