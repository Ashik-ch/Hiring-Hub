// Applies

const db = require('./db')



// to get applied list to admin

const nodemailer = require('nodemailer');

const apply = (name, email, jobname, company, status) => {
    // Check to see if there is already an application for the given email, jobname, and company.
    return db.Apply.findOne({ email, jobname, company })
        // If there is, return an error message.
        .then(data => {
            if (data) {
                return {
                    statuscode: 400,
                    status: false,
                    message: "Job Already Applied"
                }
            }
            // If there is not, create a new application object and save it to the database.
            else {
                const newApply = new db.Apply({ name, email, jobname, company, status })
                newApply.save()
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
                    to: `${email}`,
                    subject: ` ${jobname} Application Submitted`,
                    text: `A new job application  "${jobname}"  has been submitted  to "${company}". Thank You for your intrest. We will review your application and get back to you soon `
                };
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.log('Error sending email:', err);
                    } else {
                        console.log('Email sent successfully!', info);
                    }
                });
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