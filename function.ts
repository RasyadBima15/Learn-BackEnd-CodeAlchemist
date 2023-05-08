function sayHello(name?: string){ // ? bersifat opsional
    console.log("Hello World" + name);
}
sayHello();
sayHello("Code Alchemist");

// function multiply(a: number, b: number){
//     console.log(a+b);
// }
// multiply(2, 3);

// function multiply(a: number, b: number): string {
//     return (a*b).toString();
// }
// console.log(multiply(2,3))

//arrow function
// const multiply = (a: number, b: number) : number => {
//     return a*b;
// }
// console.log(multiply(2, 3));

//arrow function bentuk yang lebih sederhana jika hanya nge return 1 line saja (simple arrow function)
const multiply = (a: number, b: number): number => a*b;
console.log(multiply(2,3));