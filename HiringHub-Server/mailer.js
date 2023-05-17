const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ashikch711@gmail.com ",
        pass: "71177117"
    }
})
let details = {
    from: "ashikch711@gmail.com",
    to: "ashik117@gmail.com",
    subject: "Application submmited",
    text: "You application sent"
}

mailTransporter.sendMail(details, err = () => {
    if (err) {
        console.log("Failed to send");
    }
    else {
        console.log("mail send");
    }
})