/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

type Student = {
  name: string;
  major: string;
  active: boolean;
};

const students: Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(list: Student[]): number {
  let count: number = 0;
  for (const student of list) {
    if (student.active) {
      count++;
    }
  }
  return count;
}

function countInactiveStudents(list: Student[]): number {
  let count: number = 0;
  for (const student of list) {
    if (!student.active) {
      count++;
    }
  }
  return count;
}

function countStudentsByMajor(list: Student[], targetMajor: string): number {
  let count: number = 0;
  for (const student of list) {
    if (student.major === targetMajor) {
      count++;
    }
  }
  return count;
}

function printEnrollmentReport(list: Student[]): void {
  const totalStudents = list.length; // Mengambil total seluruh elemen array
  const activeCount = countActiveStudents(list);
  const inactiveCount = countInactiveStudents(list);
  
  const seCount = countStudentsByMajor(list, "Software Engineering");
  const netCount = countStudentsByMajor(list, "Networking");
  const mmCount = countStudentsByMajor(list, "Multimedia");

  console.log("=== University Enrollment Report ===");
  console.log(`Total Students        : ${totalStudents}`);
  console.log(`Active Students       : ${activeCount}`);
  console.log(`Inactive Students     : ${inactiveCount}`);
  console.log("--- By Major ---");
  console.log(`Software Engineering  : ${seCount}`);
  console.log(`Networking            : ${netCount}`);
  console.log(`Multimedia            : ${mmCount}`);
}

// 7. Eksekusi pemanggilan laporan
printEnrollmentReport(students);