//1 Menyusun barisan bintang
console.log('Jawaban No.1')

var row1 = 5 //isi dengan banyak nya baris
for (var i = 0; i < row1; i++) {
    console.log('*')
}

// 2. nested looping
console.log('Jawaban No.2')
var row2 = 5
for (var i = 0; i < row2; i++) {
    temp = ''
    for (var j = 0; j < row2; j++) {
        temp += '*'
    } console.log(temp)
}

// 3. nested looping
console.log('Jawaban No.3')
var row3 = 3
for (var i = 0; i < row3; i++) {
    temp = ''
    for (var j = 0; j <= i; j++) {
        temp += '*'
    } console.log(temp)
}

