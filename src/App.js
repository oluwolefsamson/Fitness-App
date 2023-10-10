import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import './App.css';
import Footer from './component/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px'}}} m='auto'>
       < Navbar />
        <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        < Footer />
    </Box>
  )
}

export default App
