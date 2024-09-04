import { Box } from '@mui/material'
import Map from '../components/Map'
import Sidebar from '../components/Sidebar'
import { SidebarItems } from '../components/SidebarItems'

const Explorer = () => {
    return (
        <Box bgcolor='white' width='100vw' height='100vh' display='flex' flexDirection='row'>
            <Sidebar
                index={1}
                menuItems={SidebarItems}
                styles={{
                    bgColor: { backgroundColor: 'white' },
                    width: { width: '210pt' },
                    listItemButton: { backgroundColor: '#f4f4f4' },
                    selectedListItemButton: { backgroundColor: '#6B728E' },
                    buttonTextColor: { color: 'white' },
                    buttonIconColor: { color: 'white' },
                    buttonShapeColor: { backgroundColor: 'black' },
                    selectedButtonShapeColor: { backgroundColor: 'red' },
                    menuItem: { 
                        backgroundColor: 'white', 
                        textColor: 'black', 
                        iconColor: 'black', 
                        shapeColor: 'white', 
                        selectedShapeColor: '#87A922',
                        onHoverColor: '#FFF5E4',
                    },
                }}
            />
            <Box display='flex' width='100%' height='100%' justifyContent='center' alignItems='center'>
            <Box width='100%' height='100%'>
                    <Map />
                </Box>
            </Box>
        </Box>
    )
}

export default Explorer