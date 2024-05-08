// Mendefinisikan objek 'mobil' dengan beberapa properti, termasuk properti yang berupa array dan objek lain
const mobil = {
    merk: 'Toyota',
    model: 'Avanza',
    spesifikasi: {
        mesin: '1500cc',
        transmisi: 'Manual',
        tahun: 2020
    },
    fitur: ['AC', 'Power Steering', 'Central Lock', 'Power Window'],
    harga: 200000000
};

// Mengakses properti objek
console.log("Merk mobil:", mobil.merk); // Output: Toyota
console.log("Spesifikasi mesin:", mobil.spesifikasi.mesin); // Output: 1500cc
console.log("Fitur-fitur mobil:", mobil.fitur.join(', ')); // Output: AC, Power Steering, Central Lock, Power Window

// Mengubah properti objek
mobil.spesifikasi.transmisi = 'Automatic';
console.log("Transmisi mobil setelah diubah:", mobil.spesifikasi.transmisi); // Output: Automatic

// Menambahkan fitur baru ke dalam array fitur
mobil.fitur.push('ABS');
console.log("Fitur-fitur mobil setelah ditambahkan ABS:", mobil.fitur.join(', ')); // Output: AC, Power Steering, Central Lock, Power Window, ABS

// Menghapus properti dari objek
delete mobil.harga;
console.log("Properti harga setelah dihapus:", mobil.harga); // Output: undefined

// Mengakses seluruh properti objek menggunakan loop
console.log("Seluruh properti mobil:");
for (let key in mobil) {
    if (typeof mobil[key] === 'object') {
        console.log(key + ":");
        for (let innerKey in mobil[key]) {
            console.log("  " + innerKey + ": " + mobil[key][innerKey]);
        }
    } else {
        console.log(key + ": " + mobil[key]);
    }
}
