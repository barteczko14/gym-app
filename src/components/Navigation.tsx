import * as React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined'
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'
import classes from './Navigation.module.css'

const theme = createTheme({
	palette: {
		primary: {
			main: '#EEEEEE',
		},
	},
})

export default function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0)

	return (
		<ThemeProvider theme={theme}>
			<Box>
				<BottomNavigation
					className={classes.navigation}
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue)
					}}>
					<BottomNavigationAction label='Trening' component={Link} to='/' icon={<FitnessCenterOutlinedIcon />} />
					<BottomNavigationAction label='Pomiary' component={Link} to='/pomiary' icon={<ScaleOutlinedIcon />} />
					<BottomNavigationAction label='Baza ćwiczeń' component={Link} to='/baza' icon={<StorageOutlinedIcon />} />
				</BottomNavigation>
			</Box>
		</ThemeProvider>
	)
}
