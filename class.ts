class MyClass{
    private name : string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getName = () => {
        return this.name;
    }
}
const myClass: MyClass = new MyClass("Code Alchemist", 1);
console.log(myClass.getName());