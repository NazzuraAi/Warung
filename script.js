// 1. Ambil elemen HTML berdasarkan id-nya
const kotakUlasan = document.getElementById('input-ulasan');
const teksKarakter = document.getElementById('info-karakter');

// 2. Pasang pendengar peristiwa (event listener) saat user mengetik
kotakUlasan.addEventListener('input', function() {
    // Hitung jumlah huruf/karakter yang ada di dalam kotak
    const jumlahKarakter = kotakUlasan.value.length;
    
    // Ubah teks penunjuk karakter secara otomatis
    teksKarakter.textContent = jumlahKarakter + ' karakter';
});
// Ambil semua elemen bintang dan teks angka rating
const semuaBintang = document.querySelectorAll('.bintang');
const teksRating = document.getElementById('teks-rating');

// Fungsi untuk menyalakan bintang & update teks
function setRating(nilai) {
    const angkaNilai = parseInt(nilai, 10); // Pastikan dibaca sebagai angka
    
    semuaBintang.forEach(bintang => {
        const nilaiBintang = parseInt(bintang.getAttribute('data-value'), 10);
        
        if (nilaiBintang <= angkaNilai) {
            bintang.classList.add('aktif');
        } else {
            bintang.classList.remove('aktif');
        }
    });
    
    // Gunakan template literal (tanda backtick `) agar teks tidak berantakan
    teksRating.textContent = `(${angkaNilai}/5)`;
}

// Beri fungsi klik pada setiap bintang
semuaBintang.forEach(bintang => {
    bintang.addEventListener('click', function() {
        const nilaiDipilih = this.getAttribute('data-value');
        setRating(nilaiDipilih);
    });
});

// Set rating awal 5 bintang
setRating(5);
// FITUR INTERAKTIF FASILITAS
const daftarFasilitas = document.querySelectorAll('#fasilitas-container input[type="checkbox"]');
const kotakInfoFasilitas = document.getElementById('info-fasilitas');

daftarFasilitas.forEach(checkbox => {
    // Jalankan fungsi saat centang diubah (diklik)
    checkbox.addEventListener('change', function() {
        const labelParent = this.parentElement;
        const namaFasilitas = this.getAttribute('data-nama');
        const rateFasilitas = this.getAttribute('data-rate');

        if (this.checked) {
            // Tampilkan kotak info rating
            kotakInfoFasilitas.style.display = 'block';
            kotakInfoFasilitas.textContent = `Rate ${namaFasilitas}: ${rateFasilitas} ⭐`;
        } else {
            // Jika centang dilepas
            kotakInfoFasilitas.style.display = 'block';
            kotakInfoFasilitas.textContent = `${namaFasilitas} tidak tersedia / mati`;
        }
    });
});