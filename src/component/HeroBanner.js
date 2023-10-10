import React from 'react';
import { Box, Stack, Typography, Button, } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg'



const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '250px', xs: '70px'},
      ml: {sm: '20px'},
      
    }} position='relative' p='20px'>
      <Typography color='brown'
      fontWeight='600'
      fontSize='26px'
      marginTop={4}>
        Fitness Club
      </Typography>

      <Typography fontWeight={700}
      sx={{ fontSize: { 
        lg: '44px',
        xs: '40px' }}}
        mb='23px'
        mt='30px'
       >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize={22}
        lineHeight='35px' mb={4}>
        Check for the most suitable <br /> <span> & </span> <br /> effective exercises
      </Typography>

      <Button variant="outlined" color="error"
      href='#exercises'>Check Exercises</Button>

      <Typography
        fontWeight={600}
        color='brown'
        className='ExerciseShadow'
        sx={{
          opacity: 0.1,
          }}
        fontSize='200px' 
        >
          Exercise
          </Typography>
        <img   
        src={HeroBannerImage} alt='banner' 
        className='banner'
     />


    </Box>
  )
}

export default HeroBanner
