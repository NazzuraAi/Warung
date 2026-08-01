// ================= 1. DATA WARUNG DINAMIS =================
const dataWarung = {
    "Warung Biduni Ism": {
        foto: "IMG_7343.jpg",
        caption: "Spot Nyaman di Warung Biduni Ism 📸",
        harga: "500 - 3.000",
        jamBuka: "06.00 - 11.00 & 18.00 - 23.00"
    },
    "Warung Zihban": {
        foto: "zihban2.jpg",
        caption: "Suasana santai dekat ikon Kota Ghoil Bawazier 📍",
        harga: "Mulai dari 300",
        jamBuka: "06.00 - 10.00 & 19.00 - 22.00"
    }
};

// ================= 2. FITUR PERPINDAHAN HALAMAN (NAVIGASI) =================
const halamanBeranda = document.getElementById('halaman-beranda');
const halamanDetail = document.getElementById('halaman-detail');

function bukaDetail(namaWarung) {
    // Sembunyikan beranda, tampilkan halaman detail
    halamanBeranda.style.display = 'none';
    halamanDetail.style.display = 'block';

    // Update Judul
    const judulDetail = document.getElementById('detail-nama-warung');
    if (judulDetail) {
        judulDetail.textContent = namaWarung;
    }

    // Update Data Dinamis (Harga, Jam Buka, Foto)
    const detail = dataWarung[namaWarung];
    if (detail) {
        const elemFoto = document.querySelector('.foto-polaroid');
        const elemCaption = document.querySelector('.caption-polaroid');
        if (elemFoto) elemFoto.src = detail.foto;
        if (elemCaption) elemCaption.textContent = detail.caption;

        const infoValues = document.querySelectorAll('.info-value');
        if (infoValues.length >= 2) {
            infoValues[0].textContent = detail.harga;
            infoValues[1].textContent = detail.jamBuka;
        }
    }
}

function kembaliKeBeranda() {
    // Sembunyikan halaman detail, tampilkan kembali beranda
    halamanDetail.style.display = 'none';
    halamanBeranda.style.display = 'block';
}

// ================= 3. FITUR PENGHITUNG KARAKTER =================
const kotakUlasan = document.getElementById('input-ulasan');
const teksKarakter = document.getElementById('info-karakter');

if (kotakUlasan && teksKarakter) {
    kotakUlasan.addEventListener('input', function() {
        const jumlahKarakter = kotakUlasan.value.length;
        teksKarakter.textContent = jumlahKarakter + ' karakter';
    });
}

// ================= 4. FITUR BINTANG RATING =================
const semuaBintang = document.querySelectorAll('.bintang');
const teksRating = document.getElementById('teks-rating');

function setRating(nilai) {
    const angkaNilai = parseInt(nilai, 10);
    
    semuaBintang.forEach(bintang => {
        const nilaiBintang = parseInt(bintang.getAttribute('data-value'), 10);
        
        if (nilaiBintang <= angkaNilai) {
            bintang.classList.add('aktif');
        } else {
            bintang.classList.remove('aktif');
        }
    });
    
    if (teksRating) {
        teksRating.textContent = `(${angkaNilai}/5)`;
    }
}

semuaBintang.forEach(bintang => {
    bintang.addEventListener('click', function() {
        const nilaiDipilih = this.getAttribute('data-value');
        setRating(nilaiDipilih);
    });
});

// Set rating awal 5 bintang
setRating(5);

// ================= 5. FITUR INTERAKTIF FASILITAS =================
const daftarFasilitas = document.querySelectorAll('#fasilitas-container input[type="checkbox"]');
const kotakInfoFasilitas = document.getElementById('info-fasilitas');

if (kotakInfoFasilitas) {
    daftarFasilitas.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const namaFasilitas = this.getAttribute('data-nama');
            const rateFasilitas = this.getAttribute('data-rate');

            if (this.checked) {
                kotakInfoFasilitas.style.display = 'block';
                kotakInfoFasilitas.textContent = `Rate ${namaFasilitas}: ${rateFasilitas} ⭐`;
            } else {
                kotakInfoFasilitas.style.display = 'block';
                kotakInfoFasilitas.textContent = `${namaFasilitas} tidak tersedia / mati`;
            }
        });
    });
}