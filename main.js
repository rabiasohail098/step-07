"use strict";
// Enums
// Syntx Enums
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
console.log(Days);
// Find Index
const days = Days.Friday;
console.log(days);
//  console.log(days);
// Find Value
const value = Days[6];
console.log(value);
// object
let week = {
    first: "Monday",
    second: "Tuesday",
    Third: "Wednesday",
};
week.first = "Saturday";
console.log(week);
var Week;
(function (Week) {
    Week[Week["first"] = 0] = "first";
    Week[Week["second"] = 1] = "second";
    Week[Week["Third"] = 2] = "Third";
})(Week || (Week = {}));
let weeks = Week[1];
console.log(weeks);
console.log(Week.first);
// Numaric Enums
var Num;
(function (Num) {
    Num[Num["num1"] = 5] = "num1";
    Num[Num["num2"] = 10] = "num2";
    Num[Num["num3"] = 11] = "num3"; // 11
})(Num || (Num = {}));
console.log(Num);
// String Enums
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["str1"] = "Red";
    TrafficLight["str2"] = "Green";
    TrafficLight["str3"] = "Yellow";
})(TrafficLight || (TrafficLight = {}));
// Heterogenous Enums
// Enum Members
// Constant Members
var Myself;
(function (Myself) {
    Myself["name"] = "Rabia";
    Myself[Myself["age"] = 35] = "age";
    // Computer Members/ Enums
    Myself[Myself["rollNo"] = 36] = "rollNo";
})(Myself || (Myself = {}));
console.log(Myself);
// console.log(Direction);
console.log("down" /* Direction.down */);
console.log("up" /* Direction.up */);
console.log("left" /* Direction.left */);
console.log("right" /* Direction.right */);
// Ambient Enum
// declare enum Color {
//     first = 'Red',
//     second = "Blue",
//     third = "Black"
// }
// let colors:Color = Color.first
// console.log(colors);
