/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */


type StudentRecord = {
  name: string;
  score: number;
};


const students: StudentRecord[] = [
  { name: "Alya", score: 88 },
  { name: "Budi", score: 71 },
  { name: "Citra", score: 95 },
  { name: "Dimas", score: 63 },
  { name: "Eka", score: 84 },
  { name: "Fajar", score: 79 },
  { name: "Gita", score: 92 },
  { name: "Hana", score: 67 }
];


let countA: number = 0;
let countB: number = 0;
let countC: number = 0;
let countD: number = 0;

let highestScore: number = students[0].score; // Patokan awal nilai pertama
let lowestScore: number = students[0].score;
let totalScore: number = 0;


for (const student of students) {
  // Akumulasi nilai untuk hitung rata-rata[cite: 1, 2]
  totalScore += student.score;

  // Evaluasi skor tertinggi & terendah
  if (student.score > highestScore) {
    highestScore = student.score;
  }
  if (student.score < lowestScore) {
    lowestScore = student.score;
  }

  // Evaluasi grade kategori
  if (student.score >= 90) {
    countA++;
  } else if (student.score >= 80) {
    countB++;
  } else if (student.score >= 70) {
    countC++;
  } else {
    countD++;
  }
}

const averageScore: number = totalScore / students.length;

console.log("=== Backend Development Grade Summary ===");
console.log(`Grade A Students : ${countA}`);
console.log(`Grade B Students : ${countB}`);
console.log(`Grade C Students : ${countC}`);
console.log(`Grade D Students : ${countD}`);
console.log(`Highest Score    : ${highestScore}`);
console.log(`Lowest Score     : ${lowestScore}`);
console.log(`Average Score    : ${averageScore.toFixed(2)}`);