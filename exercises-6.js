// 1. Looping While
console.log('Jawaban No.1')
console.log('Looping Pertama')
var i = 0;
while (i < 10) {
    console.log(2 * (i + 1) + ' - I Love Coding')
    i++
}

console.log('\n')
console.log('Looping kedua');
while (i > 0) {
    console.log(i * 2 + ' - I will become fullstack developer')
    i--
}

// 2. loping For
console.log('\n')
console.log('Jawaban No.2')
console.log('Looping Pertama')
for (var i = 0; i < 10; i++) {
    console.log(2 * (i + 1) + ' - I Love Coding')
}

console.log('\n')
console.log('Looping kedua');
for (var i = 10; i > 0; i--) {
    console.log(2 * i + ' - I Love Coding')
}

// 3. loping Ganjil Genap
console.log('\n')
console.log('Jawaban No.3')

n = 100 // n adalah 100
for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
        console.log(i + 1 + ' Ganjil')
    } else {
        console.log(i + 1 + ' Genap')
    }
}


console.log('\n')
for (var i = 0; i < n; i += 2) {
    if ((i + 1) % 3 == 0) {
        console.log((i + 1) + ' Kelipatan 3')
    }
}

console.log('\n')
for (var i = 0; i < n; i += 5) {
    if ((i + 1) % 6 == 0) {
        console.log((i + 1) + ' Kelipatan 6')
    }
}

console.log('\n')
for (var i = 0; i < n; i += 9) {
    if ((i + 1) % 10 == 0) {
        console.log((i + 1) + ' Kelipatan 10')
    }
}
