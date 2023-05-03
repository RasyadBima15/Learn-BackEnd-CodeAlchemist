const names = ["yoyo", "budi", "khubilai"];

for (let i = 0; i < names.length; i++) {
    console.log(`nama ke-${i} = ${names[i]}`); //ini adalah template string ${}
}

let i: number = 0;
while (i < 3) {
    i++;
}

for (const it of names) {
    console.log(it);
}