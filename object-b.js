// Mendefinisikan objek 'peserta' dengan beberapa properti
const peserta = {
    nama: 'Anna',
    nilai: {
        matematika: 75,
        bahasaInggris: 80,
        fisika: 70,
        kimia: 85
    }
};

// Menampilkan nama peserta dan status kelulusan berdasarkan nilai menggunakan loop dan kondisi
console.log("Status kelulusan peserta " + peserta.nama + ":");
for (let pelajaran in peserta.nilai) {
    if (peserta.nilai[pelajaran] >= 75) {
        console.log(pelajaran + ": Lulus");
    } else {
        console.log(pelajaran + ": Tidak Lulus");
    }
}
