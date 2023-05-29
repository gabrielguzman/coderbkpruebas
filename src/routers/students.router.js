import { Router } from "express";
import studentService from "../service/student.service.js";

const studentsRouter = Router();

studentsRouter.get('/', async (req,res)=>{
    try {
        const students = await studentService.getAll();
        res.status(201).send(students);
    } catch (err) {
        res.status(500).send({ err });
    }
})

studentsRouter.post('/', async (req,res)=>{
    try {
        const student = await studentService.addStudent(req.body);
        res.status(201).send(student);      
    } catch (err) {
        res.status(500).send({ err });
    }
})

studentsRouter.put('/:sid', async (req,res)=>{
    try {
        const student = await studentService.updateStudent(req.params.sid,req.body);
        res.status(201).send(student);
    } catch (err) {
        res.status(500).send({ err });
    }
})
studentsRouter.delete('/:sid', async (req,res)=>{
    try {
        const student = await studentService.deleteStudent(req.params.sid);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send({ err });
    }
})

export default studentsRouter;