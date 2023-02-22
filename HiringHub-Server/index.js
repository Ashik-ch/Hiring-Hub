// import express inside index.js file
const express = require('express')

// importing dataservice
const service = require('./authentcation')

// to connect server with mongodb
const cors = require('cors')

// create server app using express
const app = express()

// const router = express.Router();

// npm i cors   for installing cors  for conncecting frond end back end
app.use(cors({
    origin: '*'
}))

// to parse json unless node cant understand json
app.use(express.json())

// to Resolve client http requesapp.post('/register', (req, res) => {
   // to Resolve client http reques
app.post('/register', (req, res) => {
    service.register(req.body.name, req.body.age, req.body.mobile, req.body.email, req.body.password, req.body.gender, req.body.type, req.body.position, req.body.companyname, req.body.companytype)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
}) 

app.post('/login', (req, res) => {
    service.login(req.body.email, req.body.password)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})


app.post('/jobs', (req, res) => {
    service.addjob(req.body.jobname, req.body.description, req.body.place, req.body.time, req.body.company, req.body.number, req.body.id)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

// app.put('/jobs', (req, res) => {
//     service.addjob(req.body.jobname, req.body.description, req.body.place, req.body.time, req.body.company, req.body.number)
//         .then(data => {
//             res.status(data.statuscode).json(data)
//         })
// })

app.delete('/joblist/:jobname'), (req, res) => {
    service.deletejob(req.params.jobname)
        .then(data => {
            if (result) {
                res.status(data.statuscode).json(data)
            }
        })
}



app.get('/jobs', (req, res) => {
    service.joblist()
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})



app.get('/jobview/:id', (req, res) => {
    service.jobcardview(req.params.id)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})







// setup port for server
app.listen(3000, () => {
    console.log('server listening  the port number 3000')
})
