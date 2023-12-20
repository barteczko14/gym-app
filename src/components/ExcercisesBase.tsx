import React from 'react'
import { Title } from '../styled'
import styled from 'styled-components'

interface Exercise {
	id: number
	name: string
	description: string
}

interface ExcercisesBaseProps {
	excercises: Exercise[]
}

const Name = styled.h3`
	color: rgb(70 70 70);

	@media (min-width: 40em) {
		font-size: 2.25rem;
		margin: 0 0 2rem;
	}
`

const Ol = styled.ol`
	padding: 0 1rem;
`

const ExercisesBaseLi = styled.li`
	margin: 2rem auto;
	padding: 2rem 1rem 1rem;
	box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.3);
	border-radius: 0.25rem;
	overflow: hidden;
	background-color: white;

	@media (min-width: 40em) {
		padding: 3rem 2rem 2rem;
	}
`

const ExcercisesBase: React.FC<ExcercisesBaseProps> = ({ excercises }) => {
	return (
		<>
			<Title>Baza ćwiczeń</Title>
			<Ol style={{ '--length': excercises.length } as React.CSSProperties} role='list'>
				{excercises.map((exercise, index) => (
					<ExercisesBaseLi key={exercise.id} style={{ '--i': index + 1 } as React.CSSProperties}>
						<Name>{exercise.name}</Name>
						<p>{exercise.description}</p>
					</ExercisesBaseLi>
				))}
			</Ol>
		</>
	)
}

export default ExcercisesBase
