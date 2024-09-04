import { Box, Button, Card, List, ListItem, Stack, Typography } from '@mui/material'
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import { SidebarItems } from '../components/SidebarItems';
//import Draggable from 'react-draggable';
import React, { useState } from 'react';
import GridLayout from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ResizableBox } from 'react-resizable';
import DashBoardFeed from '../components/DashBoardFeed';


const Dashboard = () => {


    const items = [
        { key: 'a', content: 'A', bg: 'lightgreen' },
        { key: 'b', content: 'B', bg: 'lightblue' },
        { key: 'c', content: 'C', bg: 'lightcoral' },
        { key: 'd', content: 'D', bg: 'lightgreen' },
        { key: 'e', content: 'E', bg: 'lightblue' },
        { key: 'f', content: 'F', bg: 'lightcoral' },
        // Add more items here...
    ];

    // Generate the layout dynamically
    const layout = items.map((item, index) => {

        const cols = 12; // Number of columns in the grid
        const itemWidth = 3; // Width of each item (spanning 4 columns)

        // Calculate x position based on column index
        const x = (index * itemWidth) % cols;

        // Calculate y position based on the number of items that fit in a row
        const y = Math.floor((index * itemWidth) / cols);

        return {
            i: item.key,
            x: x, // Example: wrap every 3rd item to the next row
            y: y, // New row for every 3 items
            w: itemWidth, // Width of each item (spanning 4 columns)
            h: 12, // Height of each item (spanning 2 rows)
        };
    });

    return (
        <Box bgcolor='white'>
            <Stack direction='row' justifyContent={"space-between"}>
                <Sidebar
                    index={0}
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
                <Stack direction='column' justifyContent={"space-between"} sx={{ width: '100%' }}>
                    <Map />
                    <Box width='100%'>
                        <GridLayout
                            layout={layout}
                            cols={12}
                            rowHeight={12}
                            width={1640}
                        >
                            <Box key="a" display='flex' justifyContent='center' alignItems='center' style={{ background: '#87A922' }}>A</Box>
                            <Box key="b" display='flex' justifyContent='center' alignItems='center' style={{ background: '#87A922' }}>B</Box>
                            <Box key="c" display='flex' justifyContent='center' alignItems='center' style={{ background: '#87A922' }}>C</Box>
                            <Box key="d" display='flex' justifyContent='center' alignItems='center' style={{ background: '#87A922' }}>D</Box>
                            <Box key="e" display='flex' justifyContent='center' alignItems='center' style={{ background: '#87A922' }}>F</Box>
                            <Box key="f" display='flex' justifyContent='center' alignItems='center' style={{ background: '#87A922' }}>G</Box>
                        </GridLayout>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Dashboard