// Enums

// Syntx Enums
 enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday ,
    Saturday,
    Sunday
 }

 console.log(Days);
 
// Find Index
 const days:Days = Days.Friday
 console.log(days);

//  console.log(days);

// Find Value
const value:string = Days[6]

console.log(value);

// object
 
 let week = {
  first : "Monday",
  second : "Tuesday",
  Third : "Wednesday",    
 }

 week.first = "Saturday"
 
console.log(week);

  
 enum Week {
    first,
    second,
    Third    
   }
let weeks:string = Week[1]
console.log(weeks);

console.log(Week.first);

// Numaric Enums

enum Num {
    num1 = 5,
    num2 = 10,
    num3  // 11
}
console.log(Num);

// String Enums

enum TrafficLight {
    str1 = "Red",
    str2 = "Green",
    str3 = "Yellow"
}

// Heterogenous Enums

// Enum Members

// Constant Members

enum Myself {
    name = "Rabia",
    age = 35,

    // Computer Members/ Enums
    rollNo = age + 1
}

console.log(Myself);



// const Enum

const enum Direction { // string enum
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}
// console.log(Direction);

console.log(Direction.down);
console.log(Direction.up);
console.log(Direction.left);
console.log(Direction.right);




// Ambient Enum

// declare enum Color {
//     first = 'Red',
//     second = "Blue",
//     third = "Black"
// }

// let colors:Color = Color.first
// console.log(colors);

