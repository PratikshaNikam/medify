//import styles from './Home.module.css'
//import NavBar from "../NavBar/NavBar";
import FAQ from "../components/FAQ";
import Families from "../components/Families";
import Blogs from "../components/Blogs";
import PatientCaring from "../components/PatientCaring"
import Specialist from "../components/specialist";
import Specialization from "../components/Specialization";
import HeroServices from "../components/HeroServices";
import NavBar from "../components/NavBar";
import Offers from "../components/Offers";
import {Container,Box,Stack} from "@mui/material"

export default function Home() {
  return (
    <Box>
      <Box
        sx={{ background: "linear-gradient(#E7F0FF,rgba(232,241,255,0.47) 90%, #fff 10%)", }} mb={4}>
         <NavBar/> 

        <Container maxWidth="xl">
          {/* <HeroSlider/>  */}
          <Stack p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zInde={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1">
            {/* <SearchHospital /> */}
            <HeroServices/>

          </Stack>

        </Container>

      </Box>

      <Offers />
      <Specialization />
      <Specialist />
      <PatientCaring />
      <Blogs />
      <Families />
      <FAQ/>
      
   </Box>
  )
}