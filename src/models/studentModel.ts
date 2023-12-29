// src/models/studentModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Student extends Document {
  name: string;
  email: string;
  department: string;
  password: string;
  tasks: Array<Task>;
}

interface Task {
  title: string;
  dueTime: Date;
  status: 'pending' | 'overdue' | 'completed';
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  dueTime: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'overdue', 'completed'], default: 'pending' },
});

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  password: { type: String, required: true },
  tasks: [TaskSchema],
});

export default mongoose.model<Student>('Student', StudentSchema);
