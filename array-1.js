// Mendefinisikan sebuah array dengan beberapa elemen
const buah = ['Apel', 'Jeruk', 'Pisang', 'Anggur', 'Mangga'];

// Mengakses elemen array
console.log("Elemen array buah pada indeks ke-0:", buah[0]); 
console.log("Elemen array buah pada indeks ke-2:", buah[2]); 

// Mengubah elemen array
buah[1] = 'Nanas';
console.log("Array buah setelah mengubah elemen pada indeks ke-1:", buah); 

// Menambahkan elemen baru ke dalam array
buah.push('Durian');
console.log("Array buah setelah menambahkan 'Durian':", buah); 

// Menghapus elemen dari array
buah.splice(2, 1); // Menghapus 1 elemen dari indeks ke-2
console.log("Array buah setelah menghapus 'Pisang':", buah); 

// Mendapatkan panjang array
console.log("Panjang array buah:", buah.length);
