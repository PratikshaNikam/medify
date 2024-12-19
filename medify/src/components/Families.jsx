import banner from '../assets/our-families-banner.png';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Families() {
  return (
    <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF,#E8F1FF)' }}>
      <Container>
        <Grid container alignItems='center' spacing={{ xs: 2, md: 10 }}>
          
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} color="primary.main">
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>

            <Typography variant="h2">
              Our Families
            </Typography>

            <Typography color='#778290' lineWeight={1.8}>
              We will work with you to develop individualized care plans,including management of chronic conditions, medication management, and education on healthy living.

            </Typography>

          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={banner}
              width={1}
            height='auto'>

            </Box>
            </Grid>

        </Grid>

     </Container>

    </Box>
  );
}