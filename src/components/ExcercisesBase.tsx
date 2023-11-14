import React from 'react'
import './ExcercisesBase.css' // Importuj plik ze stylami

interface Exercise {
	id: number
	name: string
	description: string
}

interface ExcercisesBaseProps {
	excercises: Exercise[]
}

const ExcercisesBase: React.FC<ExcercisesBaseProps> = ({ excercises }) => {
	return (
		<div className='excercises-base'>
			<h2 className='title'>Baza ćwiczeń</h2>
			<ol style={{ '--length': excercises.length } as React.CSSProperties} role='list'>
				{excercises.map((exercise, index) => (
					<li className='excercises-base-li' key={exercise.id} style={{ '--i': index + 1 } as React.CSSProperties}>
						<h3>{exercise.name}</h3>
						<p>{exercise.description}</p>
					</li>
				))}
			</ol>
		</div>
	)
}

export default ExcercisesBase
