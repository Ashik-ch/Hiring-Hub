// import express inside index.js file
const express = require('express')

// importing dataservice
const auth = require('./authentcation')
const service = require('./service')

// to connect server with mongodb
const cors = require('cors')

// create server app using express
const app = express()

const PORT = process.env.PORT || 3000;

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
    auth.register(req.body.name, req.body.age, req.body.mobile, req.body.email, req.body.password, req.body.gender, req.body.type, req.body.position, req.body.companyname, req.body.companytype)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

app.post('/login', (req, res) => {
    auth.login(req.body.email, req.body.password)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

app.post('/jobs', (req, res) => {
    service.addjob(req.body.jobname, req.body.description, req.body.place, req.body.time, req.body.company, req.body.number, req.body.id, req.body.pincode,  req.body.image)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

app.get('/jobs', (req, res) => {
    service.joblist()
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})


app.get('/jobview/:id', (req, res) => {
    service.jobcardview(req.params.id)
        .then(data => {
            console.log("view", data);
            res.status(data.statuscode).json(data)
        })
})



app.delete('/joblist/:id', (req, res) => {
    service.deletejob(req.params.id)
        .then(data => {
            if (data) {
                console.log("aa1", data)
                res.status(data.statuscode).json(data)
            }
        })
})


// feedback send
app.post('/feedback', (req, res) => {
    service.feedback(req.body.name, req.body.email, req.body.type, req.body.feedback)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

// apply post user
app.post('/apply', (req, res) => {
    service.apply(req.body.email, req.body.jobname, req.body.company)
        .then(data => {
            res.json(data)
        })
})


// get applied details admin
app.get('/apply', (req, res) => {
    service.appliedlist()
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})


// get applied details for user
app.get('/myjobs/:email', (req, res) => {
    service.applied(req.params.email)
        .then(data => {
            console.log("daa", data);
            res.status(data.statuscode).json(data)
        })
})



app.get('/profile/:email', (req, res) => {
    service.profile(req.params.email)
        .then(data => {
            console.log("daa", data);
            res.status(data.statuscode).json(data)
        })
});












// setup port for server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
