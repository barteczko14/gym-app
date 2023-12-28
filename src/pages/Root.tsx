import { Outlet } from 'react-router-dom'
import BottomNavigation from '../components/Navigation'

function RootLayout() {
	return (
		<>
			<main>
				<Outlet></Outlet>
			</main>
			<BottomNavigation></BottomNavigation>
		</>
	)
}

export default RootLayout
