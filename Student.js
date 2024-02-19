export default class Student {
    constructor(fullname) {
        this.fullname = fullname;
        this.courses = [];
    }

    registerCourse(course) {
        this.courses.push(course);
    } 

    listCourses() {
        console.log(`Courses of student ${this.fullname}:`);
        this.courses.forEach(course => {
            console.log(`${course.name} - yhp: ${course.yhp}`);
        });
    }
    }