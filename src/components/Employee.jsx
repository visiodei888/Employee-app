import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Employee = () => {
  return (
    <div>
        <Typography fontSize='50px' fontFamily='fantasy'> Details Form </Typography>
            <br></br>
            <TextField label='Name' variant='filled'></TextField>
            <br></br>
            <br></br>
            <TextField label='Designation' variant='filled'></TextField>
            <br></br>
            <br></br>
            <TextField label='Location' variant='filled'></TextField>
            <br></br>
            <br></br>
            <TextField label='Salary' variant='filled'></TextField>
            <br></br>
            <br></br>
            <Button variant='contained' >SUBMIT</Button>;
    </div>
  )
}

export default Employee