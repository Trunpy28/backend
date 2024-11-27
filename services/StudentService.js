import StudentModel from '../models/StudentModel.js';

const getAllStudents = async () => {
    return await StudentModel.find();
}

const createStudent = async (student) => {
    return await StudentModel.create(student);
};

const getStudentById = async (id) => {
    return await StudentModel.findById(id);
};

const updateStudent = async (id, updatedStudent) => {
    return await StudentModel.findByIdAndUpdate(id, updatedStudent, { new: true });
};

const deleteStudent = async (id) => {
    return await StudentModel.findByIdAndDelete(id);
};

export default { getAllStudents, createStudent, getStudentById, updateStudent, deleteStudent }