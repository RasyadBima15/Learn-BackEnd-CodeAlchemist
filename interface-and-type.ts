type Gender = "male" | "female"; //gender sebagai tipe data

const gender: Gender = "male";
// const gender: Gender = "laki-laki"; //ini error

type Person = {
    name: string;
    age: number;
    adress?: {
        name: string;
        no: number;
    }
}

const person_1: Person = {
    name: "Code Alchemist",
    age: 1,
    //harus sesuai dengan tipe datanya
}
console.log(person_1);

//membuat interface
interface IPerson{
    name: string;
    age: number;
    gender? : Gender;
    walk?: (speed: number) => void;
}

//menggunakan interface
const person1: IPerson = {
    name: "Code Alchemist",
    age: 19,
    gender: "male",
    walk: function(speed){
        console.log("berjalan dengan kecepatan " + speed);
    }
}
console.log(person1);


// const person2: IPerson = {
//     name: "Code Alchemist",
//     age: 8,
// }