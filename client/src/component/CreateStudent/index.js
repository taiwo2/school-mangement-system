import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import http from './httpService';

export default function CreateStudent() {
  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: ""
  })

  const handleSubmit =  async() => {
   try {
    await http.post("http://localhost:5000/students",student)
      .then(() => {
        window.location.reload(false);
      })
   } catch(err){
     console.log(err)
   }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Create Students</h1>
      <TextField id="outlined-basic" label="Registration" variant="standard"
        value={student.regNo} onChange={(e) => setStudent({...student, regNo: e.target.value})} />
      <TextField id="outlined-basic" label="Name" variant="standard" 
        value={student.studentName} onChange={(e) => setStudent({...student, studentName: e.target.value})}/>
      <TextField id="outlined-basic" label="Grade" variant="standard"
        value={student.grade} onChange={(e) => setStudent({...student, grade: e.target.value})} />
      <TextField id="outlined-basic" label="Section" variant="standard"
        value={student.section} onChange={(e) => setStudent({...student, section: e.target.value})} />
      <Button variant="contained" color="primary" style={{marginTop: "10px"}} onClick={handleSubmit}>Create</Button>
    </Box>
  );
}