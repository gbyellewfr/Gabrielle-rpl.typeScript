/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName: string = "Nadia Putri";
const isPremiumMember: boolean = true;
const isRoomAvailable: boolean = false; 

if (isRoomAvailable) {
  if (isPremiumMember) {
    console.log("Congratulations " + customerName + "! You have received a free room upgrade.");
  } else {
    console.log("Thank you " + customerName + ". You have reserved a room.");
  }
} else {
  if (isPremiumMember) {
    console.log("Sorry " + customerName + ", no rooms are available. You have been added to the priority waiting list.");
  } else {
    console.log("Sorry " + customerName + ", no rooms are available.");
  }
}
