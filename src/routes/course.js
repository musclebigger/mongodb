const { Router } = require('express');
const courseRouter = Router();
const {getAllCourses, getCoursesById, addCourses, updateCoursesById, deleteCoursesById,} = require('../controllers/courses')

courseRouter.get('', getAllCourses);
courseRouter.post('/',addCourses);
courseRouter.get('/:id',getCoursesById);
courseRouter.put('/:id',updateCoursesById);
courseRouter.delete('/:id', deleteCoursesById);

module.exports = courseRouter;