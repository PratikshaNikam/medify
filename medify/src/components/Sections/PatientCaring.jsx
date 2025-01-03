
import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import banner from '../../assets/patientcaring.png';
import tick from '../../assets/tick-blue.png';

export default function PatientCaring() {
  return (
    <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF,#E8F1FF)' }}>
      <Container>
        <Grid container alignItems='center' spacing={6}>
          <Grid item xs={12} md={6}>
            <Box component='img'
              src={banner}
              width={ 1} />

          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} color="primary.main">
              HELPING PATIENTS FROM AROUND THE GLOBE!!

            </Typography>

            <Typography variant="h2" mb={1}>
              Patient <Box component='span' color='primary.main'>Caring</Box>
               
            </Typography>

            <Typography color='#778290' lineHeight={1.8}>
              Our goal is to deliver quality of care in a courteous,respectful, and compassionate manner.

            </Typography>

            <List sx={{ fontSize: { xs: 12, md: 18 } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{minWidth:32}}>
                <Box component='img' src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary='Check Your results Online'
                  primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#121212' }} />
              </ListItem>
              
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component='img' src={tick} height={22} width={22} />
                </ListItemIcon>
                
                <ListItemText
                  primary="Manage Your Appointments"
                  primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#121212' }} />
                
                </ListItem>

            </List>

          </Grid>
          </Grid>
      </Container>

    </Box>
  )
}