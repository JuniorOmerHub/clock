// Günü Türkçe olarak tutacak bir dizi
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function showTime() {
    let date = new Date();
    let h = date.getHours(); // Saat
    let m = date.getMinutes(); // Dakika
    let s = date.getSeconds(); // Saniye
    let dayIndex = date.getDay(); // Gün (0=Pazar, 1=Pazartesi...)

    // Saati, dakikayı ve saniyeyi 00, 01, ... formatında tutmak için
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + days[dayIndex];

    // HTML'deki ilgili div'in içeriğini güncelleyelim
    document.getElementById("current-time").innerHTML = time;
    
    // Her 1 saniyede (1000 milisaniye) bir showTime fonksiyonunu tekrar çalıştır
    setTimeout(showTime, 1000);
}

// Sayfa yüklendiğinde saati başlat
showTime();