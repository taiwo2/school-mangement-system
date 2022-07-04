import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  regNo: {
    type: Number,
  },
  studentName: {
    type: String,
  },
  grade: {
    type: String,
  },
  section: {
    type: String,
  },  
})

const student = mongoose.model('student', studentSchema);
export default student;