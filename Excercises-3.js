var nama = 'Nina'
var peran = 'Ksatria'
// jika nama dan peran tidak diisi tulis dengan Null
// Jika nama dan peran tidak diisi maka akan ada notifikation
//Input nama = 'Nina' dan peran 'Ksatria'
//Input nama = 'Danu' dan peran 'Tabib'
//Output untuk Input nama = 'Zero' dan peran 'Penyihir'

if (nama == null && peran != null) {
    console.log('Nama harus diisi')
} else if (nama != null && peran == null) {
    console.log('Peran harus diisi')
} else if (nama == null && peran == null) {
    console.log('Nama dan peran harus diisi')
} else if (nama == 'Mikael' && peran !== '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
} else if (nama == 'Nina' && peran == 'Ksatria') {
    console.log('Selamat datang di dunia Proxytia, ' + nama + '\nHalo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if (nama == 'Danu' && peran == 'Tabib') {
    console.log('Selamat datang di dunia Proxytia, ' + nama + '\nHalo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
} else if (nama == 'Zero' && peran == 'Penyihir') {
    console.log('Selamat datang di dunia Proxytia, ' + nama / n, 'Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}
else {
    console.log('Masukan Nama dan Peran Sesuai yang ada di Komen')
}

