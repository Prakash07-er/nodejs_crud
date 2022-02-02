const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
    id : {
        type: "number"
    },
    name : {
        type : "String",
        required : true
    },
    standard : {
        type: "number",
        required : true
    }
})

module.exports = mongoose.model( "CrudData" ,crudSchema)