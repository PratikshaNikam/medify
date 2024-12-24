//import styles from './Home.module.css'
//import NavBar from "../NavBar/NavBar";
import FAQ from "../components/Sections/FAQ";
import Families from "../components/Sections/Families";
import Blogs from "../components/Sections/Blogs";
import PatientCaring from "../components/Sections/PatientCaring"
import Specialist from "../components/Sections/specialist";
import Specialization from "../components/Sections/Specialization";
import HeroServices from "../components/IconLayout/HeroServices";
import SearchHospitals from "../components/SearchHospital/SearchHospitals";
import NavBar from "../components/Navbar/NavBar";
import Offers from "../components/Sections/Offers";
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
            <SearchHospitals />
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