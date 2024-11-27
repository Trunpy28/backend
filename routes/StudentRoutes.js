import express from 'express';
import { getAllStudents, createStudent, getStudentById, updateStudent, deleteStudent } from '../controllers/StudentController.js'
const router = express.Router();

router.get('/get-all', getAllStudents);
router.post('/create', createStudent);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
