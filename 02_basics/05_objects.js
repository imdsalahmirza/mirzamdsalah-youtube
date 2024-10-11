// object destructure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"

}

// console.log(course.courseinstructor)

const {courseinstructor: instructor} = course
console.log(instructor)                             // this is obj destructure