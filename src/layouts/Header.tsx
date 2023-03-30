import { Box } from "@mui/system";
import NavBar from "../components/navBar";
import '@fontsource/roboto/300.css';
import { Button, Typography } from "@mui/material";

const Header = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pt: '20px'
  }
  const logoBox = {
    display: 'flex',
    alignItems: 'center',
  }
  const textStyle = {
    fontWeight: '500',
    ml: '5px',
  }
  const buttonStyle = {
    background: '#35afbf',
    color: 'white',
    fontSize: '11px',
    p: '8px 20px 8px 20px',
    ':hover': {
      background: '#35afbf',
    }
  }
  return <Box sx={style}>
    <Box sx={logoBox}>
      <img src="./images/Ellipse 21.png" alt="Logo" />
      <Typography sx={textStyle}>Maker</Typography>
    </Box>
    <NavBar />
    <Box>
      <Button sx={buttonStyle}>Sign Up</Button>
    </Box>
  </Box>
}

export default Header