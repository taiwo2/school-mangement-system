import express from "express";
import { getStudents } from "../controller/student";
const router = express.Router();

router.get('/', getStudents);

export default router;