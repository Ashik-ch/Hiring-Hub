// services

// import db
const db = require('./db')



const addjob = (jobname, description, place, time, company, number, id, pincode,image) => {
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
                const newJob = new db.Job({ jobname, description, place, time, company, number, id, pincode, image })
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
            console.log('job', data);
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


// sending feedback
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
        })
}




// if (data) {
//     data.feedback.push(feedback)
//     data.save()
//     console.log(" data2", data);
//     return {
//         statuscode: 200,
//         status: true,
//         message: "feedback  successfully",
//         data
//     }
// }
// else {
//     const newFeedback = new db.Feedback({ name, email, type, feedback })
//     newFeedback.save()   //saving into database
//     return {
//         statuscode: 202,
//         status: true,
//         message: "fedbkk successfully",
//         newFeedback
//     }
// }


// if (acno in database) {
// if (password == database[acno]['password']) {
//     uname = database[acno]['uname']
// var username = database[acno]["uname"]
// var accountnumber = database[acno]["acno"]


// to apply job
const apply = (email, jobname, company) => {
    return db.Apply.findOne({ email, company })
        .then(data => {
            console.log("qq", data);
            if (data) {
                data.jobname.push(jobname)
                data.save()
                console.log("saved", data);
                return {
                    statuscode: 200,
                    status: true,
                    message: "pushed  successfully",
                    data
                }
            }


            else {
                const newApply = new db.Apply({ email, jobname, company })
                newApply.save()
                return {
                    statuscode: 200,
                    status: true,
                    message: " new apply",
                    newApply
                }
            }



            // else if (data[email] != [company][jobname]) {
            //     data.jobname.push(jobname)
            //     data.save()

            //     return {
            //         statuscode: 202,
            //         status: true,
            //         message: "pushed successfully",
            //         newApply
            //     }
            // }
            // else if (data = ![company] && ![jobname]) {
            //     const newApply = new db.Apply({ email, jobname, company })
            //     newApply.save()
            //     return {
            //         statuscode: 200,
            //         status: true,
            //         message: " new apply",
            //         newApply
            //     }

            // }


        })
}



// to get applied list to admin
const appliedlist = () => {
    return db.Apply.find()
        .then(data => {
            console.log("ad", data);
            if (data) {
                return {
                    statuscode: 200,
                    status: true,
                    message: "Apllied job show successful",
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

// to get  applied list to params
const applied = (email) => {
    return db.Apply.findOne({ email })
        .then((data) => {
            if (data) {
                console.log("da", data);
                return {
                    statuscode: 200,
                    status: true,
                    message: " showlist ",
                    data
                }
            }
            else {
                return {
                    statuscode: 400,
                    status: false,
                    message: "not show"
                }
            }
        })
}

const profile = (email) => {
    return db.User.findOne({ email })
        .then(data => {
            if (data) {
                return {
                    statuscode: 200,
                    status: true,
                    data: data
                }
            }
            else {
                return {
                    statuscode: 400,
                    status: false,
                    data: data
                }
            }
        })

}





//export
module.exports = { addjob, joblist, jobcardview, deletejob, feedback, apply, appliedlist, applied, profile }