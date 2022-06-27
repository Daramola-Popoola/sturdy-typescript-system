class Human{
    name: string;
    age: number;
    private course: string;
    
    constructor(name: string, age: number, course: string){
        this.name = name;
        this.age = age
        this.course = course;
    }
    register(){
        console.log("welcome"+ this.course +"");
    }
}

const Dara = new Human("Daramola", 19, "sss");
export { Dara };