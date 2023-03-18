const express = require('express')
const projects = express.Router()

const project = require('../models/project')

//const index = require('../views/index')

//INDEX
projects.get('/', (req, res) => {
    //res.send('My Index Project Page at /projects')
    // res.send(project)
    res.render('Index', 
    {
        projects: project
    })
})

// //Index Details
// projects.get('/:arrayIndex', (req, res)=>{
//     res.send(project[req.params.arrayIndex])
// })

//SHOW
projects.get('/:arrayIndex', (req, res)=>{
    
    res.render('Show', {
        project: project[req.params.arrayIndex]
    })
})


module.exports = projects