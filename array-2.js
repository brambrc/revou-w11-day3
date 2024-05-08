const nilaiUjian = [80, 75, 90, 85, 95];

let total = 0;

// Loop untuk menjumlahkan nilai dalam array
for (let i = 0; i < nilaiUjian.length; i++) {
    total += nilaiUjian[i];
    if (i === nilaiUjian.length - 1) {
        total /= nilaiUjian.length;
    }
}

console.log("Rata2 nilai ujian: " + total);



// LOOP #1
// I = 0 | total = 0 
// 0 < panjang data array ? | true
// total = total + nilaiujian[0] = total = 0 + 80 = 80
// 0 === panjang data array - 1 ? | 0 = 4 | false
// i = 0+1 = 1

// LOOP #2
// I = 1 | total = 80
// 1 < panjang data array ? | true
// total = total + nilaiujian[1] = total = 80 + 75 = 155
// 1 === panjang data array - 1 ? | 1 = 4 | false
// i = 1+1 = 2

// LOOP #3
// I = 2 | total = 155
// 2 < panjang data array ? | true
// total = total + nilaiujian[2] = total = 155 + 90 = 245
// 2 === panjang data array - 1 ? | 2 = 4 | false
// i = 2+1 = 3

// LOOP #4
// I = 3 | total = 245
// 3 < panjang data array ? | true
// total = total + nilaiujian[3] = total = 245 + 85 = 330
// 3 === panjang data array - 1 ? | 3 = 4 | false
// i = 3+1 = 4

// LOOP #5
// I = 4 | total = 330
// 4 < panjang data array ? | true
// total = total + nilaiujian[4] = total = 330 + 95 = 425
// 4 === panjang data array - 1 ? | 4 = 4 | true
// total = total / panjang data array = 425 / 5 = 85
// i = 4+1 = 5

// LOOP #6
// I = 5 | total = 
// 5 < panjang data array ? | false
