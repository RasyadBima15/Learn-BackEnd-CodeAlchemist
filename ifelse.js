var price = 10000;
// operator perbandingan untuk tipe data number
// >
// >=
// <
// <=
// ===
var isExpensive = price > 5000;
var isFive = price === 5000;
if (isExpensive) {
    console.log("mahal");
}
else if (isFive) {
    console.log('harganya 5000');
}
else {
    console.log("Murah");
}
var size = "Large";
//operator perbandingan string
// ===
if (size.toLowerCase() === "large") {
    console.log("Wrong");
}
else {
    console.log("correct");
}
