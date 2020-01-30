// Logic Chalenge X O


function xo(str) {
    // you can only write your code here!
    jumlahX = 0
    jumlahO = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'x') {
            jumlahX++
        } else {
            jumlahO++
        }
    }

    // console.log(str.length)
    // console.log(jumlahX)
    // console.log(jumlahO)

    if (jumlahX == jumlahO) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true