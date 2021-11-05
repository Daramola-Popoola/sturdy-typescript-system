"use strict";
//Basic types
let num = 4;
let company = 'HIVE Labs';
let check = true;
let anything = 20;
let arr = ['traversy media'];
//TypeScript Tuples
/*
    this allow us to specify the very type of thr values at specific position in an array in typescript
*/
let arrOfTuple = [2, 'Hive', 'Labs'];
//an array pf tuples can also me set 
let nw_array;
nw_array = [
    [1, 'Lagbaja', true],
    [2, 'Tamedun', false],
    [3, 'John', false]
];
/*
typescript unions allow the developer to specify multiple types to a variable using the boolean oerator OR |
*/
let in_id = 'Favourite';
//the enum property allows the developer to specify a group of constant values like in an object
var Direction1;
(function (Direction1) {
    Direction1[Direction1["ikini"] = 1] = "ikini";
    Direction1[Direction1["ekeji"] = 2] = "ekeji";
    Direction1[Direction1["eketa"] = 3] = "eketa";
    Direction1[Direction1["ekerin"] = 4] = "ekerin";
    Direction1[Direction1["ekarun"] = 5] = "ekarun";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["ikini"] = "One";
    Direction2["ekeji"] = "Two";
    Direction2["eketa"] = "Three";
    Direction2["ekerin"] = "Four";
    Direction2["ekarun"] = "Five";
})(Direction2 || (Direction2 = {}));
const graduand = {
    id: 1,
    name: 'Popoola Daramola David',
    discipline: 'omputer Science',
    yearOfGraduation: 2022,
    extraYear: false
};
//typescript type assertion this enables the deeloper to remodify the type of an entity when being calle upon by another entity
//note: the type assertion of an entity must overlap eachother. To do this the initial value can anly be 'any' or 'unknown'
//there are to eays to implement the type assertion
const cid = 2;
//1
const cOrder = cid;
//2
const cOrder2 = cid;
//functions and types
const addUp = (x, y) => {
    return x + y;
};
function log(msg) {
}
let House1 = {
    type: 'semi detached',
    noOfRooms: 3,
    isAvailable: true,
    address: 'Ilorin Nigeria'
};
let ile1 = {
    type: 'semi detached',
    noOfRooms: 3,
    isAvailable: true,
    address: 'Ilorin Nigeria'
};
const mathOperations = (x, y) => x + y;
// function mathOperations(x: number, y: number): MathFunc{
//     let v = x + y
//     return v
// }
//classes in typescript
class University {
    constructor(position, name) {
        this.position = position;
        this.name = name;
    }
    register() {
        return `${this.name} is at positon number ${this.position}`;
    }
}
class Faculty {
    constructor(name, noOfDept, nameOfDean, admitting) {
        this.name = name;
        this.noOfDept = noOfDept;
        this.nameOfDean = nameOfDean;
        this.admitting = admitting;
    }
    register() {
        return `${this.name} will be admitting. ${this.admitting}`;
    }
}
const science = new Faculty('FPAS', 3, 'Atanda Olusegun', true);
class Person {
    constructor(_id, name, age) {
        this._id = _id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(_id, name, age, position, status) {
        super(_id, name, age);
        this.position = position;
        this.status = status;
    }
    emplayemntStatus() {
        return `${this.name} is now employed with our company, emplayed status : ${this.status} into position: ${this.position}. Congratulations `;
    }
}
const Daramola = new Employee(1, 'Popoola Daramola David', 19, 'CEO', true);
//Generics
function createArr(items) {
    return new Array().concat(items);
}
const numArray = createArr([1, 2, 3, 4]);
const strArray = createArr(['this', '2', '3', '.']);
