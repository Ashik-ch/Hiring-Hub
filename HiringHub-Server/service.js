// services

// import db
const db = require('./db')


// adding jobs
const addjob = (jobname, description, place, time, company, number, id, pincode, image, status) => {
    return db.Job.findOne({ jobname })
        .then(data => {
            if (data) {
                return {
                    statuscode: 400,
                    status: false,
                    message: "Job already exist"
                }
            }
            else {
                const newJob = new db.Job({ jobname, description, place, time, company, number, id, pincode, image, status })
                newJob.save()
                return {
                    statuscode: 200,
                    status: true,
                    message: "Job Add successfully",
                }
            }
        })
}

// to get joblist
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


//to get pertiular job card view
const jobcardview = (uniqueNumber) => {
    console.log("uniqueNumber", uniqueNumber);
    return db.Job.find({ uniqueNumber })
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

// delete perticular job
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




// update
const updatejob = (uniqueNumber, jobname, company, description, place, pincode, number, time, image) => {
    return db.Job.findOneAndUpdate({ uniqueNumber }, { jobname, company, description, place, pincode, number, time, image })
        .then(data => {
            if (data) {
                // const newJob = new db.Job({ id, jobname, company, description, place, pincode, number, time, image })
                // newJob.save()
                return {
                    statuscode: 200,
                    status: true,
                    message: "Updated successfully",
                    data
                }
            }
            else return {
                statuscode: 400,
                status: false,
                message: "not exist"
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
                    message: "feedback successfully",
                    newFeedback
                }
            }
        })
}




// const apply = (name, email, jobname, company, status) => {
//     return db.Apply.findOne({ email, jobname, company })
//         .then(data => {
//             console.log("ED: ", data);
//             if (data) {
//                 return {
//                     statuscode: 400,
//                     status: false,
//                     message: "Job Already Applied"
//                 }
//             }
//             // else {
//             //     return db.Apply.findOne({ email, company })
//             //         .then(data => {

//             //             if (data) {
//             //                 data.jobname.push(jobname, place, image, pincode)
//             //                 data.save()
//             //                 console.log("saved", data);
//             //                 return {
//             //                     statuscode: 200,
//             //                     status: true,
//             //                     message: "Job Added",
//             //                     data
//             //                 }
//             //             }
//             else {
//                 const newApply = new db.Apply({ name, email, jobname, company, status })
//                 newApply.save()
//                 return {
//                     statuscode: 200,
//                     status: true,
//                     message: " New Application Succesfull",
//                     newApply
//                 }
//             }

//         }
//         )
// }





// to get applied list to admin
// const appliedlist = () => {
//     return db.Apply.find()
//         .then(data => {
//             // console.log("ad", data);
//             if (data) {
//                 return {
//                     statuscode: 200,
//                     status: true,
//                     message: "Apllied job show successful",
//                     data: data
//                 }
//             } else {
//                 return {
//                     statuscode: 400,
//                     status: false,
//                     message: "not show"
//                 }
//             }
//         })
// }

// to get  applied list to params
// const myjobs = (email) => {
//     return db.Apply.find({ email })
//         .then((data) => {
//             if (data) {
//                 console.log("da", data);
//                 return {
//                     statuscode: 200,
//                     status: true,
//                     message: " showlist ",
//                     data
//                 }
//             }
//             else {
//                 return {
//                     statuscode: 400,
//                     status: false,
//                     message: "not show"
//                 }
//             }
//         })
// }


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
module.exports = { addjob, joblist, jobcardview, deletejob, feedback, profile, updatejob }