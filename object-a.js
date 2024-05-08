// Mendefinisikan objek 'siswa' dengan beberapa properti
const siswa = {
    nama: 'John',
    kelas: '12A',
    nilai: {
        matematika: 85,
        bahasaInggris: 90,
        fisika: 80,
        kimia: 75
    }
};

// Menampilkan seluruh nilai siswa menggunakan loop
console.log("Nilai siswa " + siswa.nama + " untuk setiap mata pelajaran:");
for (let pelajaran in siswa.nilai) {
    console.log(pelajaran + ": " + siswa.nilai[pelajaran]);
}
