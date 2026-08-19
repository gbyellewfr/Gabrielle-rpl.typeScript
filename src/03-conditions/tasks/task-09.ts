/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

const isPoweredOn: boolean = true;
const temperature: number = 95;
const isHighVibration: boolean = false;
const productionSpeed: number = 92;
const machineName: string = "Machine-01"; // Variabel yang tadinya belum ada

if (!isPoweredOn) {
  console.log("Machine Offline.");
} else {
  if (temperature > 90) {
    if (isHighVibration) {
      console.log("Machine " + machineName + " requires Emergency Shutdown.");
    } else {
      console.log("Machine " + machineName + " requires Cooling.");
    }
  } else {
    if (productionSpeed < 80) {
      console.log("Machine " + machineName + " has Performance Warning.");
    } else {
      console.log("Machine " + machineName + " is Operating Normally.");
    }
  }
}