import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    StudentID: Number,
    Name: String,
    Roll: Number,
    Birthday: Date,
    Address: String
});

const StudentModel = mongoose.model('student', StudentSchema);

export default StudentModel;