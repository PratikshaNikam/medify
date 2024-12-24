import featured from "../../assets/blog.png";
import { Box, Typography, Stack } from '@mui/material';
import person from '../../assets/person.png';


export default function BlogCard() {
  return (
    <Box border='1px solid rgba(0,0,0,0.1' borderRadius={2}>
      <Box component='img' src={featured} width={1}>

      </Box>
      <Box p={2}>
        <Typography color='#778290' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
          Medical | March 31, 2022

        </Typography>

        <Typography component='h3' color='#1B3C74' fontSize={{xs:14 ,md:18}} fontWeight={500 } lineHeight={1.8}>
            6 Tips To Protect Your Mental Health When You are Sick.
        </Typography>

        <Stack direction='row' alignItems='center' spacing={1} >
          <Box
            component='img'
            src={person}
            height={32}
            width={32}
          >

          </Box>
          <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
            Rebecca Lee
            </Typography>
          </Stack>
        </Box>

    </Box>
  )
}