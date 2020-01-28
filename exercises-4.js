var tanggal = 30; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1800; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal < 32) {
    if (bulan < 13) {
        if (tahun >= 1900 && tahun <= 2200) {
            switch (bulan) {
                case 1:
                    bulan = 'Januari'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 2:
                    bulan = 'Februari'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 3:
                    bulan = 'Maret'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 4:
                    bulan = 'April'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 5:
                    bulan = 'Mei'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 7:
                    bulan = 'Juni'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 8:
                    bulan = 'Juli'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 9:
                    bulan = 'Agustus'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 10:
                    bulan = 'September'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 11:
                    bulan = 'November'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
                case 12:
                    bulan = 'Desember'
                    console.log(tanggal + ' ' + bulan + ' ' + tahun)
                    break;
            }
        } else {
            console.log('Isikan tahun dengan angka antara 1900 - 2200')
        }
    } else {
        console.log('Isikan bulan dengan angka antara 1 - 12')
    }
} else {
    console.log('Isi tanggal dengan angka antara 1 - 31')
}




// switch (bulan) {
//     case '1':
//         bulan = 'Januari'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '2':
//         bulan = 'Februari'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '3':
//         bulan = 'Maret'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '4':
//         bulan = 'April'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '5':
//         bulan = 'Mei'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '7':
//         bulan = 'Juni'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '8':
//         bulan = 'Juli'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '9':
//         bulan = 'Agustus'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '10':
//         bulan = 'September'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '11':
//         bulan = 'November'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     case '12':
//         bulan = 'Desember'
//         console.log(tanggal + ' ' + bulan + ' ' + tahun)
//         break;
//     default:
//         console.log('nilai variabel tanggal disini! (dengan angka antara 1 - 31) \nnilai variabel bulan disini! (dengan angka antara 1 - 12) \nnilai variabel tahun disini! (dengan angka antara 1900 - 2200)')
//         break;
// }