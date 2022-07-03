import student  from "../models/student.js"

export const getStudents = async (req,res) => {
  try{
    const allStudents = await student.find();
    
    res.status(200).json(allStudents)
  } catch(err){
    res.status(404).json({message: err.message})
  }
}
export const createStudents = async (req,res) => {
  const students = req.body;

  const newStudent = new student(students)
  try {
    await newStudent.save();
    res.status(201).json(newStudent)
    console.log(newStudent)
  } catch (error) {
    res.status(409).json({message: error.message})
  }

}