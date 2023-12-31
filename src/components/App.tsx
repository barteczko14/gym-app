import { Container, Box } from '@radix-ui/themes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../pages/Root'
import Measures from './Measures'
import ExcercisesBase from './ExcercisesBase'
import Dashboard from './Dashboard'
import Training from './Training'
import Excercise from './Excercise'
import { excercises } from '../excercisesData'

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ index: true, element: <Dashboard /> },
				{ path: 'pomiary', element: <Measures /> },
				{ path: 'baza', element: <ExcercisesBase excercises={excercises} /> },
				{
					path: 'training/:trainingId',
					element: <Training />,
				},
				{
					path: 'training/:trainingId/excercise/:excerciseId',
					element: <Excercise />,
				},
			],
		},
	])

	return (
		<>
			<Box>
				<Container size='4'>
					<RouterProvider router={router}></RouterProvider>
				</Container>
			</Box>
		</>
	)
}

export default App
