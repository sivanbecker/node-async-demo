const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-excercises', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Failed to connected to MongoDB', err))


const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    price: Number,
    isPublished: Boolean
});

const Course = mongoose.model('course', courseSchema);

async function getCourses() {
    return await Course
    .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })
    .sort({ price: -1 })
    .select({ name: 1, author: 1})
}

async function run() {
    const courses = await getCourses();
    console.log(courses)
}

run();