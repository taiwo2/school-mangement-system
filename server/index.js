import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import studentRoute from './routes/student.js'
const app = express()
// const corsOptions = {
//   origin: '*',
//   methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));
app.use(cors());

app.use('/students',studentRoute)


const connection_url = "mongodb+srv://taiwo2:amoo2323@cluster0.sxansyy.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(connection_url, {
  useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
  console.log(`connection is established and running on port : ${PORT}`)
)).catch((err) => console.log(err.message));



// mongoose.set('useFindAndModify',false);