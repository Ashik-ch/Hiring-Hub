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

//export
module.exports = { register, login }