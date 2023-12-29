// src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import adminRoutes from './routes/adminRoutes';
import studentRoutes from './routes/studentRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Student Management System API' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
