import React from 'react'
import { Container, Box } from '@radix-ui/themes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../pages/Root'
import Measures from './Measures'
import ExcercisesBase from './ExcercisesBase'
import Training from './Training'

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ index: true, element: <Training /> },
				{ path: 'pomiary', element: <Measures /> },
				{ path: 'baza', element: <ExcercisesBase /> },
			],
		},
	])

	return (
		<>
			<Box style={{ background: '#176B87' }}>
				<Container size='1'>
					<RouterProvider router={router}></RouterProvider>
				</Container>
			</Box>
		</>
	)
}

export default App
