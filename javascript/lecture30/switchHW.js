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

const marks = 101

switch (true) {

  case marks > 90 && marks <= 100:
  console.log("A");
  break;
  case marks > 80 && marks <= 90 :
  console.log("B");
  break;
  case marks > 70 && marks <= 80 :
  console.log("C");
  break;
  case marks > 60 && marks <= 70 :
  console.log("D");
  break;
  case marks > 50 && marks <= 60 :
  console.log("E");
  break;
  case marks >= 0 && marks <= 50 :
  console.log("Fail");
  break;
  default :
  console.log("Invalid")
}

