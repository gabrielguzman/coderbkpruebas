import { studentModel } from "../models/student.model.js";

class StudentService{
    constructor(){
        this.model = studentModel
    }

    async getAll(){
        return await this.model.find();
    }

    async addStudent(student){
        return await this.model.create(student);
    }

    async updateStudent(id, student){
        return await this.model.updateOne({_id:id}, student)
    }

    async deleteStudent(id){
        return await this.model.deleteOne({_id:id})
    }
}

const studentService = new StudentService();

export default studentService;;