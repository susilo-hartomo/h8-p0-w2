var tanggal = '4'; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = '2'; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = '2020'; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case '1':
        bulan = 'Januari'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '2':
        bulan = 'Februari'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '3':
        bulan = 'Maret'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '4':
        bulan = 'April'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '5':
        bulan = 'Mei'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '7':
        bulan = 'Juni'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '8':
        bulan = 'Juli'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '9':
        bulan = 'Agustus'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '10':
        bulan = 'September'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '11':
        bulan = 'November'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    case '12':
        bulan = 'Desember'
        console.log(tanggal + ' ' + bulan + ' ' + tahun)
        break;
    default:
        console.log('nilai variabel tanggal disini! (dengan angka antara 1 - 31) \nnilai variabel bulan disini! (dengan angka antara 1 - 12) \nnilai variabel tahun disini! (dengan angka antara 1900 - 2200)')
        break;
}