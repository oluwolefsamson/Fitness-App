import React from "react"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import Detail from "../component/Detail";



const ExerciseDetail = () => {
  

  const [exerciseDetail, setExerciseDetail] = useState ({});
  
  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 
      'https://youtube-search-and-download.p.rapidapi.com/videos';

      const exerciseDetailData = await fetchData
       (`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
       setExerciseDetail(exerciseDetailData);
   

    }
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      
     
    </Box>
  )
}

export default ExerciseDetail
