const Course = require('../models/course');

async function getAllCourses(req, res) {
    const courses = await Course.find().exec();
    return res.json(courses);
 }
function getCoursesById(req, res) { }
async function addCourses(req, res) {
    const {code, name, description} = req.body;
    const course = new Course({
        name,
        code,
        description
    });
    await course.save();
    return res.status(201).json(course)
 }
function updateCoursesById(req, res) { }
function deleteCoursesById(req, res) { }

module.exports = {
    getAllCourses,
    getCoursesById,
    addCourses,
    updateCoursesById,
    deleteCoursesById,
}