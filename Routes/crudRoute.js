const router = require('express').Router()
const {createStudent, readStudent, updateStudent, deleteSudent} = require('../Controllers/curdController')

router.post("/create", createStudent.name)

router.get("/read", readStudent.read)

router.put("/update/:id", updateStudent.update)

router.delete("/delete/:id", deleteSudent.delete)

module.exports= router