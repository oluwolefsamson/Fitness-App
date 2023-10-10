import React from 'react'
import {Button, Typography, Stack }from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TragetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ( { exerciseDetail }) => {
 

  const {bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },

    {
      icon: TragetImage,
      name: target
    },

    {
      icon: EquipmentImage,
      name: equipment
    }
  ]

 

  return (
    <Stack
  gap="50px"
  maxWidth= '100%'
  sx={{
    flexDirection: ['column', 'row'], // Set column for small screens and row for large screens
    p: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }}
>
  <img src={gifUrl} alt={name} loading="lazy" /> 
  <Stack sx={{ gap: '35px' }}>
    <Typography variant='h3' color='brown'>
      {name}
    </Typography>
    <Typography variant='h6'>

    Regularly performing {name} {``} improves physical health (weight, heart, muscles), 
    mental well-being (stress, mood, sleep), energy levels, longevity, 
    and disease prevention (chronic conditions). Is one of the best exercises 
    to target your {target}. Additionally, it enhances social interactions and self-esteem.
    
    </Typography>
    {extraDetail.map((item) => (
      <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
        <Button  sx={{ backgroundColor: '#fff2db', borderRadius: '50%',
      width: '100px', height: '100px'}}>
          <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px'}} />
        </Button>
      <Typography textTransform= 'capitalize' variant='h5'>
        {item.name}
      </Typography>
      </Stack>
    )
      
    )}
  </Stack>
</Stack>
  
  )
}

export default Detail
