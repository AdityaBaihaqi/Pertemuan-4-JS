function klik() {
    let teks = "Merah Putih"
    
    let inputan1 = prompt("Hai, tuliskan Merah Putih!")

    let inputan2 = prompt("Coba tuliskan 'huruf kapital' ")
    let upperCase = teks.toUpperCase()
    alert(upperCase)

    let inputan3 = prompt("Coba sekarang tuliskan 'huruf kecil' ")
    let lowerCase = teks.toLowerCase()
    alert(lowerCase)

    let inputan4 = prompt("Sekarang coba ganti kata 'Putih menjadi Muda' ")
    let ubahKata = teks.replace("Putih", "Muda")
    alert(ubahKata)

    let inputan5 = prompt("Terakhir tulis 'banyak karakter' ")
    let panjangTeks = teks.length
    alert(panjangTeks)
}

const tombol = document.getElementById("klik")
tombol.addEventListener("click", klik)