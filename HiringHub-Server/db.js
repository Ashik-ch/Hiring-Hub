// mongoDb connection

//1 import moongose for connection
// mongoose.set('strictQuery', true);
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

// 2 define conncection String
mongoose.connect('mongodb://127.0.0.1:27017/Jobs', {
    useNewUrlParser: true
})

// const uri = ('mongodb://localhost:27017/BANKAPP',
//     () => {  console.log("mongoDb Connected");   });

//3 Create  a model to store data  with schema
const User = mongoose.model('User', {
    name: String,
    age: Number,
    mobile: Number,
    email: String,
    password: String,
    gender: String,
    type: String,
    position: String,
    companyname: String,
    companytype: String
})

const Job = mongoose.model('Job', {
    jobname: String,
    description: String,
    place: String,
    time: String,
    company: String,
    number: Number,
    id: Number,
    pincode: Number,
    image:String
})

const Feedback = mongoose.model('Feedback', {
    name: String,
    email: String,
    type: String,
    feedback: Array
})

const Apply = mongoose.model('Apply', {
    name: String,
    email: String,
    jobname: Array,
    company: String
})

















//4 export fot using in other files
module.exports = { User, Job, Feedback, Apply }



