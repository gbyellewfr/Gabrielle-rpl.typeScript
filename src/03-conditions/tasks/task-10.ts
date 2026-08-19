/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.8
- Display the final registration result.
 */


let studentName: string = "Nadia Putri";
let activeStudent: boolean = true;
let tuitionPaid: boolean = true;
let passedProgrammingFundamentals: boolean = true;
let passedDatabaseSystems: boolean = true;
let gpa: number = 3.45;
let seatsAvailable: boolean = false;

let finalResult: string;

if (activeStudent && tuitionPaid) {


    if (
        passedProgrammingFundamentals &&
        passedDatabaseSystems &&
        gpa >= 3.20
    ) {

        // Step 3 - Seat Availability
        if (seatsAvailable) {
            finalResult = "Registration Successful";
        } else {
            finalResult = "Added to Waiting List";
        }

    } else {
        finalResult = "Academic Requirements Not Met";
    }

} else {
    finalResult = "Registration Rejected";
}

console.log("Student Name:", studentName);
console.log("Final Registration Result:", finalResult);