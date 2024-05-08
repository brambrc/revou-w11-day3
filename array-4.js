// Fungsi untuk mengecek apakah sebuah bilangan prima
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const bilangan = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log("Bilangan prima dari array:");

// Loop untuk mengecek dan mencetak bilangan prima
for (let i = 0; i < bilangan.length; i++) {
    if (isPrime(bilangan[i])) {
        console.log(bilangan[i]);
    }
}
