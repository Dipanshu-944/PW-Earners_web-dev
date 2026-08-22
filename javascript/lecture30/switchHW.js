const grade = "F";

switch (grade) {
  case "A":
    console.log("marks > 90%");
    break;
  case "B":
    console.log("marks > 80% and marks <= 90%");
    break;
  case "C":
    console.log("marks > 70% and marks <= 80%");
    break;
  case "D":
    console.log("marks > 60% && marks <= 70%");
    break;
  case "E":
    console.log("marks > 40% and marks <= 60%");
    break;
  case "F":
    console.log(" marks < 40%, You are fail in this semester");
    break;
  default:
    console.log("Invalid input");
}
