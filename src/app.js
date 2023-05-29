// importamos el paquete express
import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routers/users.router.js';
import studentsRouter from './routers/students.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);
app.use('/api/students', studentsRouter);


mongoose.connect('mongodb+srv://gabrielguzman147gg:12345@gabrielcoder.o4pfrml.mongodb.net/');
app.listen(8080, () => {
	console.log('escucho el 8080');
});

