import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material';


const ExerciseCard = ( { exercise } ) => {

    
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />

      <Stack direction='row' alignItems='center' justifyContent='center'>
       
        <Button sx={{ ml: '21px', color: '#fff', background: 'brown', fontSize: '14px', 
            borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.bodyPart}
        </Button>

        <Button sx={{ ml: '21px', color: '#fff', background: 'purple', fontSize: '14px', 
            borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.target}
        </Button>
      </Stack>
        <Typography ml ='21px' color='#000' fontWeight='bold' 
            mt='11px' pb='10px' textTransform='capitalize' textAlign='center'>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard
