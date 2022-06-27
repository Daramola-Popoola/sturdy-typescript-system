"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dara = void 0;
class Human {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    register() {
        console.log("welcome" + this.course + "");
    }
}
const Dara = new Human("Daramola", 19, "sss");
exports.Dara = Dara;
