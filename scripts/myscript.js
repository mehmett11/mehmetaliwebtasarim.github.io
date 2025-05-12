function gosterSonuc() {
    const miktar = document.getElementById('miktar').value;
    const btcDegeri = 850000;
    const sonuc = miktar / btcDegeri;
    localStorage.setItem('btcSonucu', sonuc.toFixed(6));
    window.location.href = 'sonuc.html';
}

function yazdirSonuc() {
    const sonuc = localStorage.getItem('btcSonucu');
    document.getElementById('btc_sonuc').textContent = sonuc + " BTC alabilirsiniz.";
}