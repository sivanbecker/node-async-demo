const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-excercises')
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error('Failed connecting to MongoDB', err))

const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = new mongoose.model('course', courseSchema);

async function getCourses() {
    return await Course
    .find({ isPublished: true })
    .or([{ price: { $gte: 15 }}, {name: /.*by.*/i} ])         
    .select({ name: 1, price: 1, isPublished: 1})
}

async function run() {
    const courses = await getCourses();
    console.log(courses)
}

run();