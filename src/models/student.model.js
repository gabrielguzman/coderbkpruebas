import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    dni:{
        type:String,
        required: true,
        unique: true
    },
    year:{
        type: Number,
        required: true,
    },
    note:{
        type:Number,
        required: true,
    }
});

export const studentModel = mongoose.model('students',studentSchema);