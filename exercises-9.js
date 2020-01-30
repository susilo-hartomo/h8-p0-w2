//FUNCTION//

// 1. Membuat Function Print
function showOut() {
    return console.log('Hello Function!')
}

console.log('Jawaban Soal No 1')
showOut()
console.log('\n')

// 2. Membuat fungsi perkalian
function calculateMultiply(num1, num2) {
    return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2)
console.log('Jawaban Soal No 2')
console.log(hasilPerkalian)
console.log('')


// 3. MEMBUATLAH KODE FUNCTION MENGGABUNGKAN STRING

function processSentence(name, age, address, hobby) {
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + "!"
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log('Jawaban Soal No 3')
console.log(fullSentence);
// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"