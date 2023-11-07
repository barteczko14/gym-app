import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

function RootLayout(props: any) {
	return (
		<>
			<main>
				<Outlet></Outlet>
			</main>
			<Navigation></Navigation>
		</>
	)
}

export default RootLayout
