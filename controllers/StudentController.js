import studentService from '../services/StudentService.js';

export const getAllStudents = async (req, res) => {
    try{
        const students = await studentService.getAllStudents();
        res.status(200).json({ students });
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

export const createStudent = async (req, res) => {
    try{
        const newStudent = await studentService.createStudent(req.body);
        res.status(201).json({ newStudent });
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

export const getStudentById = async (req, res) => {
    try{
        const student = await studentService.getStudentById(req.params.id);
        res.status(200).json({data: student});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

export const updateStudent = async (req, res) => {
    try{
        const student = await studentService.updateStudent(req.params.id, req.body);
        if (student == null) {
            res.status(404).json({ message : `Không tìm thấy sinh viên có mã id ${req.params.id}`});
        } 
        else {
            res.status(200).json({data: student});
        }
    }catch(err){
        res.status(500).json({error: `id sinh viên không hợp lệ`});
    }
};

export const deleteStudent = async (req, res) => {
    try{
        const student = await studentService.deleteStudent(req.params.id);
        if (student == null) {
            res.status(404).json({ message : `Không tìm thấy sinh viên có mã id ${req.params.id}`});
        } else {
        res.status(200).json({data: student});
        }
    }catch(err){
        res.status(500).json({error: `id sinh viên không hợp lệ`});
    }
};