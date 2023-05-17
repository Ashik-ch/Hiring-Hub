//  npm init        --  npm i express 
//  create index.js file    --  index.js
//  npm i nodemon   --  npm i cors  


// import express inside index.js file
const express = require('express')

const nodemailer = require('nodemailer');


// importing dataservice
const auth = require('./authentcation')
const service = require('./service')
const applyserv = require('./applies')
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
    service.addjob(req.body.jobname, req.body.description, req.body.place, req.body.time, req.body.company, req.body.number, req.body.id, req.body.pincode, req.body.image, req.body.status)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})

// to get joblist
app.get('/jobs', (req, res) => {
    service.joblist()
        .then(data => {
            // console.log("DATA", data);
            res.status(data.statuscode).json(data)
        })
})

//to get pertiular job card view
app.get('/jobview/:uniqueNumber', (req, res) => {
    service.jobcardview(req.params.uniqueNumber)
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})


// update
app.put('/jobs/update/:uniqueNumber', (req, res) => {
    console.log("req.params.uniqueNumber", req.params.uniqueNumber, req.body);
    service.updatejob(req.params.uniqueNumber, req.body.jobname, req.body.company, req.body.description, req.body.place, req.body.pincode, req.body.number, req.body.time, req.body.image)
        .then(data => {
            console.log("updateRes", data);
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

//Job approval
app.put('/verifyjob', async (req, res) => {
    try {
        const item = req.body;
        db.Job.updateOne(
            { jobname: item.jobname },
            { status: item.status })
            .then((document) => {
                res.json(document);
            });
    } catch (err) {
        next(err);
    }
})


app.delete('/job/:name', (req, res) => {
    const jobname = req.params.name;
    db.Job.deleteOne({ jobname })
        .then((result) => {
            console.log("res:", result);
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error });
        });
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
    applyserv.apply(req.body.name, req.body.email, req.body.jobname, req.body.company, req.body.status)
        .then(data => {
            res.json(data)
        })
})


// approvel by admin
app.put('/apply', async (req, res) => {
    try {
        const item = req.body;
        console.log("status", item.status);
        const result = await db.Apply.updateOne(
            { jobname: item.jobname, company: item.company, email: item.email },
            { status: item.status }
        );
        res.json(result);

        // Send an email notification to the hiring manager.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ashikch711@gmail.com',
                pass: 'jgfaphigdkvlceno'
            }
        });
        const mailOptions = {
            from: {
                address: "ashikch711@gmail.com",
                name: "Hiring Hub"
            },
            to: `${item.email}`,
            subject: ` ${item.jobname} Application approved`,
            text: `Hy,
    Application  "${item.jobname}"  has been approved  to "${item.company}". Our team will contact you for interview `
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log('Error sending email:', err);
            } else {
                console.log('Email sent successfully!', info);
            }
        });


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
    applyserv.appliedlist()
        .then(data => {
            res.status(data.statuscode).json(data)
        })
})


// get applied details for user
app.get('/myjobs/:email', (req, res) => {
    applyserv.myjobs(req.params.email)
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
