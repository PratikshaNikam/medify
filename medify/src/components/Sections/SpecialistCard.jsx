import { Box, Typography } from '@mui/material';

export default function SpecialistCard({ img, title, designation }) {
  console.log(img, title, designation);
  return (
    <Box
      sx={{
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box
        component='img'
        src={img}
        width={1}
        height={250}
        sx={{
          objectFit: 'cover',
        }}
      />
      <Box p={2}>
        <Typography variant='h6' fontWeight={600}>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {designation}
        </Typography>
      </Box>
    </Box>
  )
}