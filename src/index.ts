//Basic types
let num: number = 4
let company: string = 'HIVE Labs'
let check: boolean = true
let anything: any = 20
let arr: string[] = ['traversy media']

//TypeScript Tuples
/*
    this allow us to specify the very type of the values at specific position in an array in typescript
*/
let arrOfTuple: [number, string, string] = [2, 'Hive', 'Labs']
//an array pf tuples can also me set 
let nw_array: [number, string, boolean][]

nw_array = [
    [1, 'Lagbaja', true],
    [2, 'Tamedun', false],
    [3, 'John', false]
]

/*
typescript unions allow the developer to specify multiple types to a variable using the boolean oerator OR | 
*/

let in_id: number | string = 'Favourite'

//the enum property allows the developer to specify a group of constant values like in an object

 enum Direction1 {
    ikini = 1,
    ekeji,
    eketa,
    ekerin,
    ekarun
}

enum Direction2 {
    ikini = 'One',
    ekeji = 'Two',
    eketa = 'Three',
    ekerin = 'Four',
    ekarun = 'Five'
}


//typescript objects. The specific values needed for each field in the object can be explicitly specified using the type keyword 

type Discipline = {
    readonly id: number,
    name: string,
    discipline: string,
    yearOfGraduation: number
    extraYear: boolean
}

const graduand: Discipline = {
    id: 1,
    name: 'Popoola Daramola David',
    discipline: 'omputer Science',
    yearOfGraduation: 2022,
    extraYear: false
}

const tup: [number, string, boolean] = [40, 'brocolli', false]

//typescript type assertion this enables the deeloper to remodify the type of an entity when being calle upon by another entity
//note: the type assertion of an entity must overlap eachother. To do this the initial value can anly be 'any' or 'unknown'
//there are to eays to implement the type assertion
const cid: any = 2
//1
const cOrder = <string> cid
//2
const cOrder2 = cid as number


//functions and types

const addUp = (x: number, y: number): number => {
    return x + y
}

function log(msg: string | boolean): void{
}

//typescript interfaces. this works the the type and object syntax but the diffence is that an interface cannot be used with premitives of unions

interface House{
    type: string,
    noOfRooms: number,
    isAvailable: boolean,
    address: string
}

let House1: House = {
    type: 'semi detached',
    noOfRooms: 3,
    isAvailable: true,
    address: 'Ilorin Nigeria'
}

//object property modification. There are two types of property modifaction 'optional' and 'readonly'
// '?' means optional while readonly literally means readonly in typescript property modification
interface Ile{
    readonly type: string,
    noOfRooms: number,
    isAvailable: boolean,
    address: string,
    landlord?: string 
}

let ile1: Ile = {
    type: 'semi detached',
    noOfRooms: 3,
    isAvailable: true,
    address: 'Ilorin Nigeria'
}

//specifying functional interfaces (infterfaces for methods)

interface MathFunc {
    (x: number, y: number): number
}

const mathOperations: MathFunc = (x: number, y: number) => x + y

// function mathOperations(x: number, y: number): MathFunc{
//     let v = x + y
//     return v
// }


//classes in typescript

class University{
     position: any
    name: string
    
    constructor(position: number | string, name: string){
        this.position = position
        this.name = name
    }
    
    register(){
        return `${this.name} is at positon number ${this.position}`
    }
}

//using the implemnets keyword for connecting an interfacxe or type to a class

interface FacultyInterface {
    name: string,
    noOfDept: number,
    nameOfDean: string,
    register(): string,
    admitting: boolean
}

class Faculty implements FacultyInterface{
    name: string
    noOfDept: number
    nameOfDean: string
    admitting: boolean
    
    constructor(name: string, noOfDept: number, nameOfDean: string, admitting: boolean){
        this.name = name
        this.noOfDept = noOfDept
        this.nameOfDean = nameOfDean
        this.admitting = admitting
        
    }
    register(){
        return `${this.name} will be admitting. ${this.admitting}`
    }
}

const science = new Faculty('FPAS', 3, 'Atanda Olusegun', true)

//subclasses

type PersonType = {
    readonly _id: number,
    name: string,
    age?: number
}


class Person implements PersonType{
    _id: number
    name: string
    age: number
    
    constructor(_id: number, name: string, age: number){
        this._id = _id
        this.name = name
        this.age = age
        
    }
}

class Employee extends Person{
    position: string
    status: boolean
    constructor(_id: number, name: string, age: number, position: string, status: boolean){
        super(_id, name, age)
        this.position = position
        this.status = status
    }
    emplayemntStatus(){
        return `${this.name} is now employed with our company, emplayed status : ${this.status} into position: ${this.position}. Congratulations `
    }
}

const Daramola = new Employee(1, 'Popoola Daramola David', 19, 'CEO', true)

//Generics

function createArr<T>(items: T[]):T[]{
    return new Array().concat(items)
}

const numArray = createArr<number>([1, 2, 3, 4])
const strArray = createArr<string>(['this', '2', '3', '.'])
// interface Build {
//     info:  string,
//     timestamp: number,
//     mimetype: object
// }
// let build: Build = {
//     info: 'ola',
//     timestamp: Date.now(),
//     mimetype: {prop: 'mind'}
// }
// fetch('http://localhost:3000/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
    
//     body: JSON.stringify(build)
// })