/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * mname, ID student, idterm exam, final exam, assigments, attandance score
 * 2. Determine the most appropriate data type for each variable.
 * string, int, float, float, float, float
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 * 
 */

//1. Primitive types
const studentName: string = "Nadia Putri";
const IdStudent: string = "ST2026045"
const extracurricular : boolean = true;

//2. komponen nilai (tanpa menghitung)
type Score ={
    midExam: number
    finalExam: number
    assignments: number
    attandance: number

}

const assessment: Score = {
    midExam: 84,
    finalExam: 91.5,
    assignments: 88.5,
    attandance: 100

}

//3. hasil
console.log("=== Final score ====");
console.log({
    studentName,
    IdStudent,
    extracurricular,
    assessment
})
