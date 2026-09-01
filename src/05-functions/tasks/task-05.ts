/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores: number[] = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let highest: number = scores[0];
  for (const score of scores) {
    if (score > highest) {
      highest = score;
    }
  }
  return highest;
}

function findLowestScore(scores: number[]): number {
  let lowest: number = scores[0];
  for (const score of scores) {
    if (score < lowest) {
      lowest = score;
    }
  }
  return lowest;
}

function calculateAverage(scores: number[]): number {
  let total: number = 0;
  for (const score of scores) {
    total += score;
  }
  return total / scores.length;
}

function countPassedStudents(scores: number[]): number {
  let passedCount: number = 0;
  for (const score of scores) {
    if (score >= 75) {
      passedCount++;
    }
  }
  return passedCount;
}

function displayScoreReport(data: number[]): void {
  const highest = findHighestScore(data);
  const lowest = findLowestScore(data);
  const average = calculateAverage(data);
  const passed = countPassedStudents(data);

  console.log("=== Backend Development Score Report ===");
  console.log(`Highest Score   : ${highest}`);
  console.log(`Lowest Score    : ${lowest}`);
  console.log(`Average Score   : ${average.toFixed(2)}`);
  console.log(`Passed Students : ${passed}`);
}

// eksekusi pemanggilan laporan
displayScoreReport(scores);