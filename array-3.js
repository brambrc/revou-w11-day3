const bilangan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Bilangan genap dari array:");

// Loop untuk mengecek dan mencetak bilangan genap
for (let i = 0; i < bilangan.length; i++) {
    if (bilangan[i] % 2 === 0) {
        console.log(bilangan[i]);
    }
}
