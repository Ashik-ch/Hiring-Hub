// services

// import db
const db = require('./db')

const register = (name, age, mobile, email, password, gender, type, position, companyname, companytype) => {
    return db.User.findOne({ email })
        .then(data => {
            console.log(" db.User.findOne", db.User.findOne);
            console.log(" data", data);
            if (data) {
                return {
                    statuscode: 422,
                    status: false,
                    message: "uname is already used"
                }
            } else {
                const newUser = new db.User({ name, age, mobile, email, password, gender, type, position, companyname, companytype })
                newUser.save()   //saving into database
                return {
                    statuscode: 200,
                    status: true,
                    message: "user created successfully",
                    newUser
                }
            }
        })
}

// login definition
const login = (email, password) => {
    return db.User.findOne({ email, password })
        .then(data => {

            console.log(" data", data);
            if (data) {
                return {
                    statuscode: 200,
                    status: true,
                    message: "login successful",
                    data
                }
            } else {
                return {
                    statuscode: 400,
                    status: false,
                    message: "invalid email / password",
                    // name: name
                }
            }
        }
        )
}


const addjob = (jobname, description, place, time, company, number, id, pincode) => {
    return db.Job.findOne({ jobname })
        .then(data => {
            if (data) {
                return {
                    statuscode: 400,
                    status: false,
                    message: "already exist"
                }
            }
            else {
                const newJob = new db.Job({ jobname, description, place, time, company, number, id, pincode })
                newJob.save()
                return {
                    statuscode: 200,
                    status: true,
                    message: "Job Add successfully",
                }
            }
        })
}

const joblist = () => {
    return db.Job.find()
        .then(data => {
            if (data) {
                return {
                    statuscode: 200,
                    status: true,
                    message: "job show successful",
                    data: data
                }
            } else {
                return {
                    statuscode: 400,
                    status: false,
                    message: "not show"
                }
            }
        })
}



const jobcardview = (id) => {
    return db.Job.find({ id })
        .then(data => {
            if (data) {
                return {
                    statuscode: 200,
                    status: true,
                    data: data
                }
            }
        })
}

const deletejob = (id) => {

    return db.Job.deleteOne({ id })
        .then((result) => {
            console.log("result", result);
            if (result) {
                return {
                    result,
                    status: true,
                    message: "Deletered  successfully",
                    statuscode: 200,
                    "id": id
                }
            }
            else {
                return {
                    status: false,
                    message: "Deletered  failed",
                    statuscode: 400
                }
            }
        })
}



const feedback = (name, email, type, feedback) => {
    return db.Feedback.findOne({ email })
        .then(data => {
            console.log(" data", data);
            if (data) {
                data.feedback.push(feedback)
                data.save()
                console.log(" data2", data);
                return {
                    statuscode: 200,
                    status: true,
                    message: "feedback  successfully",
                    data
                }
            }
            else {
                const newFeedback = new db.Feedback({ name, email, type, feedback })
                newFeedback.save()   //saving into database
                return {
                    statuscode: 202,
                    status: true,
                    message: "fedbkk successfully",
                    newFeedback
                }   
            }
            //             else {
            // return {
            //     statuscode: 400,
            //     status: false,
            //     message: "email not found",
            //     newFeedback
            // }

        })
}






//export
module.exports = { register, login, addjob, joblist, jobcardview, deletejob, feedback }