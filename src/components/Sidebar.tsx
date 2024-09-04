import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Sidebar = (props: any) => {

    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const [selectedIndex, setSelectedIndex] = useState(props.index);
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <List>
            <ListItem>
                <Box
                    component="img"
                    src="/images/logo.png"
                    alt="Description of the image"
                    sx={{
                        width: '100%',
                        height: '100pt',
                        borderRadius: '6px',
                    }}
                />
            </ListItem>
            {props.menuItems.map((item: any, index: any) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton component="a" onClick={() => { setSelectedIndex(index); navigate(item.path); }}
                        sx={{ minHeight: '70pt', '&:hover': { backgroundColor: props.styles.menuItem.onHoverColor } }}
                    >
                        <Box width='4.5pt' height='30pt' marginRight='12pt' borderRadius='10pt' bgcolor={selectedIndex === index ? props.styles.menuItem.selectedShapeColor : props.styles.menuItem.ShapeColor}>
                        </Box>
                        <ListItemIcon sx={{ color: props.styles.menuItem.iconColor }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} sx={{ color: props.styles.menuItem.textColor, textTransform: 'uppercase' }} />
                        <Box width='10pt' height='10pt' borderRadius='50%' bgcolor={selectedIndex === index ? props.styles.menuItem.selectedShapeColor : props.styles.menuItem.ShapeColor}>
                        </Box>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

    return (
        // <Box width='20%' bgcolor="#404258">
        //     <List>
        //         {props.menuItems.map((item: any, index: any) => (
        //             <ListItem key={index} >
        //                 <ListItemButton component="a" onClick={() => { setSelectedIndex(index); navigate(item.path); }}
        //                     sx={{
        //                         backgroundColor: selectedIndex === index ? '#6B728E' : '#f4f4f4',
        //                         '&:hover': {
        //                             backgroundColor: selectedIndex === index ? '#4B5563' : '#e2e2e2',
        //                         }
        //                     }}
        //                 >
        //                     <ListItemIcon>
        //                         {item.icon}
        //                     </ListItemIcon>
        //                     <ListItemText color='black' primary={item.label} />
        //                 </ListItemButton>
        //             </ListItem>
        //         ))}
        //     </List>
        // </Box>
        <Box width={props.styles.width} >
            {!isSmUp && (
                <Button variant='contained' onClick={toggleDrawer(true)} sx={{ position: 'fixed', top: 0, left: 0, bgcolor: 'black' }}>
                    Open drawer
                </Button>
            )}
            <Drawer
                open={isSmUp ? true : open} // Always open for sm and larger screens
                variant={isSmUp ? 'persistent' : 'temporary'}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: { width: props.styles.width, bgcolor: props.styles.bgColor } }}
            >
                {DrawerList}
            </Drawer>
        </Box>
    )
}

export default Sidebar