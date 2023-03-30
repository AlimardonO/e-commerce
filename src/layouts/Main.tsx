import { Box, Button, Typography } from '@mui/material';
import '@fontsource/roboto/500.css';

const Main = () => {
  const text = 'Make a Creative solutions for your Creative ideas.';
  const text2 = 'We are here to give you effective ideas. We help the brands to become what they want.';
  const textStyle = { fontWeight: 'bold', fontSize: '40px', width: '50%' };
  const text2Style = { color: 'grey', fontWeight: '300', width: '50%' };
  const buttonStyle = {
    background: '#35afbf',
    color: 'white',
    fontSize: '11px',
    p: '8px 20px 8px 20px',
    mt: '20px',
    ':hover': {
      background: '#35afbf',
    }
  }

  return <Box sx={{ display: 'flex', pt: '100px' }}>
    <Box sx={{ width: '60%' }}>
      <Typography sx={textStyle}>{text}</Typography>
      <Typography sx={text2Style}>{text2}</Typography>
      <Button sx={buttonStyle}>Get Started</Button>
    </Box>
    <Box sx={{ width: '40%', display: 'flex' }}>
      <img style={{ width: '550px', zIndex: '1', marginLeft: '-50px', marginTop: '-45px', position: 'absolute' }} src="./images/image.png" />
      <img style={{ width: '413px', position: 'absolute' }} src="./images/image background.png" />
    </Box>
  </Box>
}

export default Main