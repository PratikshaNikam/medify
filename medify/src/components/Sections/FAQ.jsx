import { Box, Container, Grid, Typography } from '@mui/material';
import faqBanner from '../assets/faqs-banner.jpg';

export default function FAQ() {
  const faqs = [
    {
      question: "why choose our medical for your family?",
      answer:"we are the best medical service provider in the country"
    },
    {
      question: "why we are different from others? ",
      answer:"we are the best medical service provider in the country"
    },
    {
      question: "Trusted & experience senior care and love",
      answer:"we are the best medical service provider in the country"
    },

    {
      question: "How to get appointment for emergency cases?",
      answer:"we are the best medical service provider in the country"
    }
  ]


  return (
    <Box py={4}>
      <Container maxWidth="xl">

        <Typography color='primary.main' fontWeight={600} textAlign='center'>
          Get Your Answer
        </Typography>

        <Typography variant='h2' mb={2} textAlign='center'>
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Box
            
              src={faqBanner}
              component='img'
              width={1}
            height='auto'>

            </Box>

          </Grid>
          <Grid item xs={12} md={6}>
            <Box maxWidth={450}>
              <p>will create accordians</p>
              {/* <CustomizedAccordions data={faqs}/> */}

            </Box>
            </Grid>

        </Grid>


      </Container>
      
      </Box>
    )

}