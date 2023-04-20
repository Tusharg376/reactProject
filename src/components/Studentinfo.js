import { Button, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import './StudentInfo.css'

export default function Studentinfo() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [gender,setGender] = useState("")
  const [age,setAge] = useState("")
  const [allData,setAllData] = useState([])

  
  const handleSubmit = function(){
      let studentData = {
          name: name,
          email:email,
          gender: gender,
          age: age
      } 
    setAllData([...allData,studentData])
    setName("")
    setEmail("")
    setGender("")
    setAge("")
  
  }

    return (
    <div className='main'>
        <div className='input_form'>
        <h2>Student Enrollment Form</h2>
        <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e)=> setName(e.target.value)} />
        <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e)=> setEmail(e.target.value)}  />
        <TextField id="standard-basic" label="Age(in Years)" variant="standard" type="number" value={age} onChange={(e)=> setAge(e.target.value)}  />
        <TextField id="standard-basic" label="Gender" variant="standard" value={gender} onChange={(e) => setGender(e.target.value)}/>
        
        <br/>
        <Button variant="outlined" onClick={handleSubmit} > Submit </Button>
        <br/>
        </div>  
        <div className='student_data'>
            <h3 className='head_data'>Student Data</h3>
            {allData.length > 0 ? (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Age</TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {allData.map((student) => (
                            <TableRow key={student.email}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.email}</TableCell>
                                <TableCell>{student.gender}</TableCell>
                                <TableCell>{student.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        ) : (
            <p>No student data yet.</p>
        )}
        </div>
    </div>
  )
}
