const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nilaiUjian = [];

rl.question("Masukkan jumlah siswa: ", (jumlahSiswa) => {
    const jumlah = parseInt(jumlahSiswa);

    // Loop untuk meminta masukan nilai dari setiap siswa
    for (let i = 1; i <= jumlah; i++) {
        rl.question(`Masukkan nilai ujian siswa ke-${i}: `, (nilai) => {
            nilaiUjian.push(parseFloat(nilai));

            // Jika semua siswa telah dimasukkan nilainya, hitung rata-rata
            if (nilaiUjian.length === jumlah) {
                let total = 0;
                for (let j = 0; j < nilaiUjian.length; j++) {
                    total += nilaiUjian[j];
                }
                const rataRata = total / jumlah;
                console.log("Rata-rata nilai ujian: " + rataRata.toFixed(2));
                rl.close();
            }
        });
    }
});
