const mongoose = require('mongoose');
const CrudData = require('../Model/curdModel')


//create Student
const createStudent = {
    name : async (req,res) => {
        try {
            const name = req.body.name
            const standard = req.body.standard 
            const id = req.body.id

            const allData = await CrudData({
                name,
                standard,
                id
            })
            await allData.save();
            res.status(200).json({msg:"Data inserted"})

        } catch (error) {
            res.status(500).json({msg:"Internel server error"})
        }
        
    }
}


//read Student
const readStudent = {
    read : async (req,res) => {
        try {
           
            const readData = await CrudData.find({})
            res.status(200).json({msg:"Data inserted", readData})

        } catch (error) {
            res.status(500).json({msg:"Internel server error"})
        }
        
    }
}

//Update-student

const updateStudent ={
    update : async(req,res) => {
        try {
            const {id} = req.params;
            const {
                name, 
                standard
            } = req.body

            const updateProduct = await CrudData.findByIdAndUpdate(id, {name, standard}, {new:true})
            res.status(200).json({msg: "Data  Updated", updateProduct})

         } catch (error) {
            res.status(404).json({msg: "Data  not Updated", error})

        }
    }
}

//delete-student

const deleteSudent ={
    delete : async(req,res) => {
        try {
            const {id} = req.params;
            
            const deleteProduct = await CrudData.findByIdAndRemove(id).exec()
            res.status(200).json({msg: "Data  deleted", deleteProduct})

         } catch (error) {
            res.status(404).json({msg: "Data  not deleted", error})

        }
    }
}


module.exports= {createStudent, readStudent, updateStudent, deleteSudent}