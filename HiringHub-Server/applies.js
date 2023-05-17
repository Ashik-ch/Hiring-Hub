// Applies

const db = require('./db')

const apply = (name, email, jobname, company, status) => {
    return db.Apply.findOne({ email, jobname, company })
        .then(data => {
            console.log("ED: ", data);
            if (data) {
                return {
                    statuscode: 400,
                    status: false,
                    message: "Job Already Applied"
                }
            }
            else {
                const newApply = new db.Apply({ name, email, jobname, company, status })
                newApply.save()
                return {
                    statuscode: 200,
                    status: true,
                    message: " New Application Succesfull",
                    newApply
                }
            }
        })
}

const appliedlist = () => {
    return db.Apply.find()
        .then(data => {
            // console.log("ad", data);
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
const myjobs = (email) => {
    return db.Apply.find({ email })
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




//export
module.exports = { apply, appliedlist, myjobs }