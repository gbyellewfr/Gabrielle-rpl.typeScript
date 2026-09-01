/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

type Submission = {
  student: string;
  submitted: boolean;
  score: number;
};

const submissions: Submission[] = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 }
];

let submittedCount: number = 0;
let unsubmittedCount: number = 0;
let passedCount: number = 0;
let reviseCount: number = 0;
let totalScore: number = 0;

const unsubmittedNames: string[] = [];
const reviseNames: string[] = [];

for (const item of submissions) {
  // Akumulasikan seluruh nilai tugas[cite: 1]
  totalScore += item.score;

  // Evaluasi pengumpulan dan kelulusan[cite: 1]
  if (item.submitted) {
    submittedCount++;

    if (item.score >= 75) {
      passedCount++;
    } else {
      reviseCount++;
      reviseNames.push(item.student); // Tampung nama siswa yang harus revisi[cite: 1]
    }
  } else {
    unsubmittedCount++;
    unsubmittedNames.push(item.student); // Tampung nama siswa yang belum mengumpulkan[cite: 1]
  }
}

const classAverage: number = totalScore / submissions.length;

console.log("=== LMS Assignment Summary ===");
console.log(`Submitted Students       : ${submittedCount}`);
console.log(`Unsubmitted Students     : ${unsubmittedCount}`);
console.log(`Passed Students          : ${passedCount}`);
console.log(`Must Revise Students     : ${reviseCount}`);
console.log(`Unsubmitted Student List : ${unsubmittedNames.join(", ")}`);
console.log(`Must Revise Student List : ${reviseNames.join(", ")}`);
console.log(`Class Average Score      : ${classAverage.toFixed(2)}`);