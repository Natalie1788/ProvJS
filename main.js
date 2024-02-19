import Student from "./Student.js"

import Course from "./Course.js"

const student5 = new Student("Annika");
const designCourse1= new Course("Adobe Photoshop", 15);
const designCourse2 = new Course("Adobe Illustrator", 10);
student5.registerCourse(designCourse1);
student5.registerCourse(designCourse2);
student5.listCourses();
designCourse1.getCourseInfo();
designCourse2.getCourseInfo();

const student6 = new Student("Erik");
const progrCourse = new Course("Java", 25);
progrCourse.getCourseInfo();
student6.registerCourse(progrCourse);
student6.listCourses();