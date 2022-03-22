import React from 'react'
import { Routes, Route } from "react-router-dom";
import Paper from '@mui/material/Paper';

import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

export default function Content() {
  return (
    <Paper 
        elevation={3}
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
            justifyContent: "center",
            alignItems: "center",
            width: 128,
            height: 128,
            padding: 5,
        },
    }}
    >
        <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
        </Routes>                
    </Paper>
  );
}

