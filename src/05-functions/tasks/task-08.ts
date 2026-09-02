/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

type Submission = {
    student: string;
    submitted: boolean;
    score: number ;
};

const submissions: Submission[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function getTotalStudents(data: Submission[]): number {
    return data.length;
};

function getSubmittedCount(data: Submission[]): number {
    let count : number = 0;
    for (const item of data) {
        if (item.submitted) {
            count++;
        }
    }
    return count;
}

function getMissingCount(data: Submission[]): number {
  let count: number = 0;
  for (const item of data) {
    if (!item.submitted) {
      count++;
    }
  }
  return count;
}

function getPassedCount(data: Submission[]): number {
  let count: number = 0;
  for (const item of data) {
    if (item.submitted && item.score >= 75) {
      count++;
    }
  }
  return count;
}

function getRevisionCount(data: Submission[]): number {
  let count: number = 0;
  for (const item of data) {
    if (item.submitted && item.score < 75) {
      count++;
    }
  }
  return count;
}

function getAverageScore(data: Submission[]): number {
  let total: number = 0;
  for (const item of data) {
    total += item.score;
  }
  return total / data.length;
}

function getHighestScore(data: Submission[]): number {
  let highest: number = data[0].score;
  for (const item of data) {
    if (item.score > highest) {
      highest = item.score;
    }
  }
  return highest;
}

function getLowestScore(data: Submission[]): number {
  let lowest: number = data[0].score;
  for (const item of data) {
    if (item.score < lowest) {
      lowest = item.score;
    }
  }
  return lowest;
}


function displayPrincipalReport(data: Submission[]): void {
  console.log("=== Principal LMS Submission Report ===");
  console.log(`Total Students        : ${getTotalStudents(data)}`);
  console.log(`Submitted Assignments : ${getSubmittedCount(data)}`);
  console.log(`Missing Assignments   : ${getMissingCount(data)}`);
  console.log(`Passed Students       : ${getPassedCount(data)}`);
  console.log(`Requiring Revision    : ${getRevisionCount(data)}`);
  console.log(`Class Average Score   : ${getAverageScore(data).toFixed(2)}`);
  console.log(`Highest Score         : ${getHighestScore(data)}`);
  console.log(`Lowest Score          : ${getLowestScore(data)}`);
}

// Eksekusi fungsi void untuk mencetak laporan[cite: 13]
displayPrincipalReport(submissions);