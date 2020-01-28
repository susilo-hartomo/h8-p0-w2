var nama = ''
var peran = ''

if (nama !== '') {
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    if (peran !== '') {
        if (peran == 'Ksatria') {
            console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
        } else if (peran == 'Tabib') {
            console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
        } else if (peran == 'Penyihir') {
            console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
        } else {
            console.log('Isi peran dengan Ksatria, Tabib atau Penyihr')
        }
    } else {
        console.log('Peran harus diisi')
    }
} else {
    console.log('Nama harus diisi')
}