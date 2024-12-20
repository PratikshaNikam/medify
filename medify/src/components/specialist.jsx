import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css';
import img1 from '../assets/lesley.png';
import img2 from '../assets/ahmad.png';
import img3 from '../assets/heena.png';
import img4 from '../assets/ankur.png';
import img5 from '../assets/ahmad-stevens.png';
import SpecialistCard from './SpecialistCard';
import {Autoplay,Pagination} from 'swiper/modules';

export default function Specialist() {
  const specialist_data = [
    { img: img1, title: 'Dr. Lesley Hull', designaton: "Medicine" },
    { img: img2, title: 'Dr. Ahmad Khan', designaton: "Neurologist" },
    { img: img3, title: 'Dr. Heena Sachdeva', designaton: "Orthopadics" },
    { img: img4, title: 'Dr. Ankur Sharma', designaton: "Medicine" },
    { img: img5, title: 'Dr. Ahmad Stevens', designaton: "Neurologist" },
    { img: img1, title: 'Dr. Lesley Hull', designaton: "Medicine" },
    { img: img2, title: 'Dr. Ahmad Khan', designaton: "Neurologist" },
    { img: img3, title: 'Dr. Heena Sachdeva', designaton: "Orthopadics" },
    { img: img4, title: 'Dr. Ankur Sharma', designaton: "Medicine" },
    { img: img5, title: 'Dr. Ahmad Stevens', designaton: "Neurologist" },
    
    
  ]
    
  
  return (
    <Box py={4} id="find-doctors">
      <Typography variant='h2' textAlign='center' mb={3} px={2}>
        Our Medical Specialist
      </Typography>
      
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={
          {
            767: {
              slidesPerView:4
            }
          }
        }
      >
        {
          specialist_data.map((item, index) => (
            <SwiperSlide key={index}>
              <SpecialistCard
                img={item.img}
                title={item.title}
                designation={item.designaton}
              />
                </SwiperSlide>
        ))}
      </Swiper>
      </Box>
      
  )
}