import { NavLink } from 'react-router-dom'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined'
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'
import styled from 'styled-components'

const NavigationContainer = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #845ec2;
	box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
	z-index: 1100;
`

const NavigationList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 0;
	list-style: none;
`

const NavigationItem = styled.li`
	flex: 1;
	text-align: center;
`

const NavigationLink = styled(NavLink)`
	text-decoration: none;
	color: #333;
	display: flex;
	flex-direction: column;
	align-items: center;

	&.active {
		color: #fff;
	}
`

const SimpleBottomNavigation = () => {
	return (
		<NavigationContainer>
			<NavigationList>
				<NavigationItem>
					<NavigationLink to='/' end>
						<FitnessCenterOutlinedIcon />
						<span>Trening</span>
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink to='/pomiary'>
						<ScaleOutlinedIcon />
						<span>Pomiary</span>
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink to='/baza'>
						<StorageOutlinedIcon />
						<span>Baza ćwiczeń</span>
					</NavigationLink>
				</NavigationItem>
			</NavigationList>
		</NavigationContainer>
	)
}

export default SimpleBottomNavigation
