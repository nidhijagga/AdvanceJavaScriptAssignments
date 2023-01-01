// "use strict";

// var getA = function(a) {
//     return a;
// };

// //we can use this
// // let square = a => a*a;
// //and this is better
// let square = (a) =>{
//     return a*a;
// }
// console.log(getA(2));
// console.log(square(2));

// let multiply = (a, b) =>{
//     return a*b;
// }
// console.log(multiply(3,4));

// var x = function(){
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     }, 1000);
// }
// // x();//This will not work
// var xx = new x();

// var y = function(...n){
//     for(var i = 0; i<n.length; i++){
//         console.log(n[i]);
//     }
// };

// y(1,2,3);






class Student {
    static numStudents = 0;  // static variable to keep track of number of students

    constructor(name, age, phone, marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.numStudents++;  // increment the count of students
    }

    isEligible() {
        return this.marks > 40;
    }

    isEligibleForPlacements(minBoardMarks) {
        const a = (age) => {
            const minAge = 22;
            if (minBoardMarks <= this.marks && minAge < age) return true;
            else return false;
        }
        return a(this.age);
    }
}

// create 5 students with different names and ages
const student1 = new Student("Nidhi", 24, 7129387423, 70);
const student2 = new Student("Teena", 21, 8532334567, 35);
const student3 = new Student("Aarti", 25, 9673423422, 50);
const student4 = new Student("Dinky", 23, 9823456789, 30);
const student5 = new Student("Ritu", 24, 8625647890, 55);

// check if a student is eligible for college
if (student1.isEligible()) {
    console.log(`${student1.name} is eligible for college.`);
} else {
    console.log(`${student1.name} is not eligible for college.`);
}

// print the number of students created
console.log(`Number of students: ${Student.numStudents}`);

//Checking Who is Eligible for Placements
console.log("Eligible for Placement: ");
const arr = [student1, student2, student3, student4, student5];
arr.filter((Student) => Student.isEligibleForPlacements(40)).forEach(student => console.log(student.name));

