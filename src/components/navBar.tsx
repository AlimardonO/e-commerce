import { FC } from 'react';
import { Box, Link, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

interface dataType {
    name: string;
}

const NavBar: FC = () => {
    const data: dataType[] = [
        { name: 'Home' },
        { name: 'Services' },
        { name: 'About' },
        { name: 'The Team' },
        { name: 'Pricing' },
        { name: 'Contact' },
    ];
    const style = {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
    return <Box sx={style}>
        {data.map(items => (
            <Box key={items.name}>
                <Link href='#' underline='none'><Typography sx={{ fontWeight: '300' }} color='grey'>{items.name}</Typography></Link>
            </Box>
        ))}
    </Box>
}

export default NavBar