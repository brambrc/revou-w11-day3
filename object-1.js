// Mendefinisikan sebuah objek 'mobil' dengan beberapa properti
const mobil = {
    merk: 'Toyota',
    model: 'Avanza',
    tahun: 2020,
    warna: 'Putih',
    harga: 200000000
};

// Mengakses properti objek
console.log("Merk mobil:", mobil.merk); 
console.log("Tahun produksi:", mobil.tahun); 

// Mengubah properti objek
mobil.warna = 'Hitam';
console.log("Warna mobil setelah diubah:", mobil.warna); 

// Menambahkan properti baru ke dalam objek
mobil.transmisi = 'Manual';
console.log("Properti transmisi mobil:", mobil.transmisi); 

// Menghapus properti dari objek
delete mobil.harga;
console.log("Properti harga setelah dihapus:", mobil.harga); 

// Mengakses seluruh properti objek menggunakan loop
console.log("Seluruh properti mobil:");
for (let key in mobil) {
    console.log(key + ": " + mobil[key]);
}
