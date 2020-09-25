const mongoose = require('mongoose');
// const dbname = 'playground';
const dbname = 'mongo-excercises';

mongoose.connect('mongodb://localhost:27017/' + dbname, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB :' + dbname))
    .catch(err => console.error('Failed connecting to MongoDB', err))

const courseSchema = mongoose.Schema({
    name: {type:String, unique: true},
    author: {type:String, unique: true},
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('course', courseSchema);

async function createCourse() {
    try {
        const nodeCourse = new Course({
            name: 'NodeJS Course',
            author: 'Kobi',
            tags: ['node', 'backend'],
            isPublished: true,
        })
    
        const result = await nodeCourse.save();
        console.log(result);
    }
    catch (err) {
        console.error("Failure", err)
    }
    
    
}

// createCourse();

async function getCourses() {
    const courses = await Course
        .find({tags: { $in: ['backend'] }})
        .and({ isPublished: true})
        .sort({name: 1})
        .select({name: 1, author: 1, isPublished: 1})
        
    console.log(courses)
}

getCourses();
