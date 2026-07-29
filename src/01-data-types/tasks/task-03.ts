/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

interface studentInformation{
    idStudent:number;
    fullName:string;
    age:number;
    status:boolean;
}

const students :studentInformation[] = [
    {idStudent: 1, fullName: "Gabrielle Wahyu", age: 16, status:true},
    {idStudent: 2, fullName: "Sachien Kageysha", age: 17, status:true},
    {idStudent: 3, fullName: "Graciella Maria", age: 16, status:false},
];

console.log("=== Student Information List ===");
console.log( students );