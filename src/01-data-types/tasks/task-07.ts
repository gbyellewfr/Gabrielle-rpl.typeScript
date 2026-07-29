/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

interface Student {
    studentID: string;
    fullName: string;
    gradeLevel: number;

}

interface Course {
    courseID: string;
    tittle: string;
    intructor: string;

}

interface Registration {
    student: Student;
    course : Course;
    date: string;
    payment: "Paid" | "Unpaid"

}

const Registrations : Registration[] = [
    {
        student: {
            studentID: "001",
            fullName: "Gabrielle Wahyu",
            gradeLevel: 1
        },
        course: {
            courseID: "017",
            tittle: "Java",
            intructor: "Mr. David"
        },
        date: "29-07-2026",
        payment: "Paid"
    },

    {
        student: {
            studentID: "002",
            fullName: "Graciella Maria",
            gradeLevel: 3
        },
        course: {
            courseID: "017",
            tittle: "Java",
            intructor: "Mr. David"
        },
        date: "29-07-2026",
        payment: "Unpaid"
    },

    {
        student: {
            studentID: "001",
            fullName: "Yvenne Kageysha",
            gradeLevel: 1
        },
        course: {
            courseID: "017",
            tittle: "MariaDB",
            intructor: "Mr. James"
        },
        date: "29-07-2026",
        payment: "Paid"
    }
]

console.log("=== Programming Cources ===");
console.log(Registrations);