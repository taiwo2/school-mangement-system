import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  regNo: {
    type: Number,
    // default: "123468"
  },
  studentName: {
    type: String,
    // default: "taiwo"
  },
  grade: {
    type: String,
    // default: "taiwo"
  },
  section: {
    type: String,
    // default: "A"
  },
  // subjectsGrade: [String]
  
})

const student = mongoose.model('student', studentSchema);
export default student;