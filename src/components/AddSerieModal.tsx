import React from 'react'
import classes from './Modal.module.css'

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
		<div className={classes.overlay}>
			<div className={classes.modalContainer}>
				<div className={classes.modalContent}>
					<div className={classes.modalTitle}>
						<h5>Dodaj serię</h5>
					</div>
					<form>
						<div>
							<input className={classes.modalInput} type='text' placeholder='Nazwa' onChange={handleNewSerieChange} />
						</div>
						<div>
							<input className={classes.modalInput} type='number' placeholder='Waga' onChange={handleWeightChange} />
						</div>
						<div>
							<input
								className={classes.modalInput}
								type='number'
								placeholder='Liczba powtórzeń'
								onChange={handleRepsChange}
							/>
						</div>

						<div className={classes.modalButtonGroup}>
							<button className={classes.modalButton} onClick={handleCloseAddSerieModal} type='button'>
								Zamknij
							</button>
							<button onClick={handleAddSerie} className={classes.modalButton} type='submit'>
								Dodaj
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddSerieModal
