//  npm init        --  npm i express 
//  create index.js file    --  index.js
//  npm i nodemon   --  npm i cors  


// import express inside index.js file
const express = require('express')

// importing dataservice
const auth = require('./authentcation')
const service = require('./service')
const db = require("./db")


// to connect server with mongodb
const cors = require('cors')

// create server app using express
const app = express()

// npm i cors   for installing cors  for conncecting frond end back end
app.use(cors({
    origin: '*'
}))


// to parse JSON data from requests 
app.use(express.json())

// to Resolve client http request  (api creation)
app.post('/register', (req, res) => {
    auth.register(req.body.name, req.body.age, req.body.mobile, req.body.email, req.body.password, req.body.gender, req.body.type, req.body.position, req.body.companyname, req.body.companytype)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

// Login 
app.post('/login', (req, res) => {
    auth.login(req.body.email, req.body.password)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

// adding jobs
app.post('/jobs', (req, res) => {
    service.addjob(req.body.jobname, req.body.description, req.body.place, req.body.time, req.body.company, req.body.number, req.body.id, req.body.pincode, req.body.image)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

// to get joblist
app.get('/jobs', (req, res) => {
    service.joblist()
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

//to get pertiular job card view
app.get('/jobview/:id', (req, res) => {
    service.jobcardview(req.params.id)
        .then(data => {
            console.log("view", data);
            res.status(data.statuscode).json(data)
        })
})


// update
app.put('/jobs/update/:id', (req, res) => {
    service.updatejob(req.body.jobname, req.body.description, req.body.place, req.body.time, req.body.company, req.body.number, req.body.id, req.body.pincode, req.body.image)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})


// delete perticular job
app.delete('/joblist/:id', (req, res) => {
    service.deletejob(req.params.id)
        .then(data => {
            console.log("aa1", data)
            res.status(data.statuscode).json(data)
        }
        )
})


// feedback send
app.post('/feedback', (req, res) => {
    service.feedback(req.body.name, req.body.email, req.body.type, req.body.feedback)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

// apply job  user
app.post('/apply', (req, res) => {
    service.apply(req.body.name, req.body.email, req.body.jobname, req.body.company, req.body.status)
        .then(data => {
            res.json(data)
        })
})

// approvel by admin
app.put('/apply', async (req, res) => {
    try {
        const item = req.body;
        console.log("status", item.status);
        console.log("statussss", item);

        const result = await db.Apply.updateOne(
            { jobname: item.jobname, company: item.company, email: item.email },
            { status: item.status }
        );
        console.log("applyres", result);
        res.json(result);
    } catch (err) {
        console.log("err", err);
    }
});


app.delete('/apply/:name', (req, res) => {
    const jobname = req.params.name;
    db.Apply.deleteOne({ jobname })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error });
        });
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
    service.myjobs(req.params.email)
        .then(data => {
            console.log("daa", data);
            res.status(data.statuscode).json(data)
        })
})


// profile
app.get('/profile/:email', (req, res) => {
    service.profile(req.params.email)
        .then(data => {
            console.log("daa", data);
            res.status(data.statuscode).json(data)
        })
});












// setup port for server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
