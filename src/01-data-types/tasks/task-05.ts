/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

interface employeeAttendance{
    idEmployee: string;
    name: string;
    date: string;
    checkIn:string;
    checkOut: string;
    workingHours:number;
    presence: "Present" | "Absent"

}

const employee1 : employeeAttendance = {
idEmployee : "AD001",
name : "Jihann",
date : "28 Agustus 2026",
checkIn: "07.30",
checkOut: "16.28",
workingHours: 3,
presence: "Present",

}

const employee2 : employeeAttendance = {
idEmployee : "MGR002",
name : "Vanes",
date : "28 Agustus 2026",
checkIn: "07.31",
checkOut: "16.30",
workingHours: 5,
presence: "Present",

}

const employee3 : employeeAttendance = {
idEmployee : "PBD003",
name : "Aurell",
date : "29 Agustus 2026",
checkIn: "07.30",
checkOut: "16.00",
workingHours: 8,
presence: "Present",

}

console.log("=== Employee Attendance ===");
console.log(employee1);
