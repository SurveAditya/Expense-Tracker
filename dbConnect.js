const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.qxcfybg.mongodb.net/?retryWrites=true&w=majority' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))