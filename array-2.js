const nilaiUjian = [80, 75, 90, 85, 95];

let total = 0;

// Loop untuk menjumlahkan nilai dalam array
for (let i = 0; i < nilaiUjian.length; i++) {
    total += nilaiUjian[i];
}

console.log("Total nilai ujian: " + total);
