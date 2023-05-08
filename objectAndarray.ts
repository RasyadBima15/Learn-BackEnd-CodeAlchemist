// array
const number = [1, 2, 3, 4 ];
number.push(10); //push digunakan untuk menambahkan nilai ke dalam array
number.push(11);
// number.push("1"); //ini error karena tiap elemennya itu berupan tipe data number kecuali ada salah satu saja tipe data string di dalamnya
number.pop();
number.pop();
number.push(1);
number.push(2);
number.push(3);

console.log(number);

//type annotation pada array
const numbersArray: number[] = [1, 2, 3, 4, 5]; //ini error ketika ada tipe data selain number di dalamnya
//atau bisa ditulis dengan generic structure
const numbersArray1: Array<string> = ['1', '2', '3'];
const numbersArray2: Array<string | number> = ['1', '2', '3', 4];

//spread operator
const newArray = [... numbersArray, 6]; //mengcopy object di dalam array
console.log(newArray);

//object 
const person = {
    name: "Code Alchemist",
    age: 1,
    adress: {
        name: 'Jalan Perintis Kemerdekaan',
        no: 17,
    }
}
//megakses element pada object
console.log(person.age);
console.log(person['age']);
console.log(person.adress.name);

//spread operator
const newPerson = {...person, isMale: false};
console.log(newPerson);