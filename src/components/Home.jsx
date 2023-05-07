import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [users, setData] = useState([])

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    setData(users = response.data)
    console.log(response.data);
})
.catch(err=>console.log(err))
},[])


  return (
    <div style={{ padding: "12px" }}>
        
        <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <h2>Id</h2>
                            </TableCell>
                            <TableCell><h2>Name</h2></TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map((value, index) =>{
                                return(
                                    <TableRow key={index}>
                                        <TableCell>{value.id}</TableCell>
                                        <TableCell>{value.name}</TableCell>
                                        <TableCell>{value.email}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        <TableRow>

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default Home