import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'
import Loder from './Loder';

const SimilarExercises = ({targetMuscleExercises,equipmentMuscleExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant='h4' mb={5}>
          Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar
        data = {targetMuscleExercises}/> :<Loder />}

      </Stack>
      <Typography variant='h4' mb={5} mt={3}>
          Exercises that target the same equipment group
      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {equipmentMuscleExercises.length ? <HorizontalScrollbar
        data = {equipmentMuscleExercises}/> :<Loder />}

      </Stack>

    </Box>
  )
}

export default SimilarExercises