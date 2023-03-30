import { Box, Container } from '@mui/material';
import Header from '../../layouts/Header';
import Main from '../../layouts/Main';

const HeroArea = () => {
  const style = {

  }
  return <Box sx={{
    background: '#f3feff',
    height: '100vh',
    width: '100vw'
  }}>
    <Container>
      <Header />
      <Main />
    </Container>
  </Box>
}

export default HeroArea