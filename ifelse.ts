const price: number = 10000;

// operator perbandingan untuk tipe data number
// >
// >=
// <
// <=
// ===

const isExpensive = price > 5000;
const isFive = price === 5000; 
if (isExpensive) {
    console.log("mahal");
} else if (isFive){
    console.log('harganya 5000')
} else {
    console.log("Murah");
}

const size: string = "Large";

//operator perbandingan string
// ===
if (size.toLowerCase() === "large") {
    console.log("Wrong");
} else {
    console.log("correct");
}

const isBold = true;
if (isBold) {
    console.log("this is bold");
}