
import express from 'express';
import { loginAdmin, addStudent, assignTask } from '../controlller/adminController';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/add-student', addStudent);
router.post('/assign-task', assignTask);

export default router;
