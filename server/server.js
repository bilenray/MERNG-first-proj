const express = require('express');
const app = express();
const {graphqlHTTP} = require('express-graphql')
require('dotenv/config')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
// const cors = require("cors")

// app.use(cors)
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

mongoose.connect(process.env.MONGO_DB, ()=>{
    console.log('connected to db')
})

app.listen(5000, ()=>{
    console.log("Server is listening to the port 5000")
})