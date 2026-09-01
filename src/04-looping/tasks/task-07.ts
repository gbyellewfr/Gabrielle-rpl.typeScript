/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

type AttendanceRecord = {
  name: string;
  present: boolean;
};

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount: number = 0;
let absentCount: number = 0;
const absentStudentNames: string[] = [];

for (const student of attendances) {
  if (student.present) {
    presentCount++;
  } else {
    absentCount++;
    absentStudentNames.push(student.name); // Simpan nama siswa yang absen
  }
}

  const attendancePercentage: number = (presentCount / attendances.length) * 100;

console.log("=== Class Attendance Summary ===");
console.log(`Present Students      : ${presentCount}`);
console.log(`Absent Students       : ${absentCount}`);
console.log(`Absent Student Names  : ${absentStudentNames.join(", ")}`);
console.log(`Attendance Percentage : ${attendancePercentage.toFixed(2)}%`);