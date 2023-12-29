// src/routes/studentRoutes.ts
import express from 'express';
import { loginStudent, viewTasks, changeTaskStatus } from '../controlller/studentController';

const router = express.Router();

router.post('/login', loginStudent);
router.get('/view-tasks', viewTasks);
router.post('/change-task-status', changeTaskStatus);

export default router;
