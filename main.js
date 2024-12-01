document.addEventListener('DOMContentLoaded', () => {
    const playFirstBtn = document.getElementById('playFirstBtn');
    const mainContent = document.getElementById('mainContent');
    const playMusicBtn = document.getElementById('playMusic');
    const firstSong = document.getElementById('firstSong');
    const loveMusic = document.getElementById('loveMusic');
    const airplane = document.getElementById('airplane');
    const emojiContainer = document.getElementById('emoji-container');
      
    const emojis = ['❤️', '💕', '💗', '💋', '🥰'];

    // Fungsi untuk animasi berkedip
    function startBlinkAnimation() {
        playFirstBtn.classList.add('blink');
    }

    // Mulai berkedip setelah beberapa detik
    setTimeout(startBlinkAnimation, 2000);

    // Ketika tombol "Play Dulu Ya Sayang" diklik
    playFirstBtn.addEventListener('click', () => {
        // Putar lagu pertama
        firstSong.play();

        // Sembunyikan tombol pertama
        playFirstBtn.style.display = 'none';
        
        // Tampilkan konten utama
        mainContent.classList.remove('hidden');
    });

    // Fungsi animasi pesawat
    function animateAirplane() {
        airplane.style.top = '20%';
        airplane.style.left = '80%';
        airplane.style.transform = 'rotate(45deg)';
    }

    // Fungsi membuat emoji jatuh
    function createFallingEmojis() {
        emojiContainer.innerHTML = '';

        for (let i = 0; i < 10; i++) {
            const emoji = document.createElement('div');
            emoji.classList.add('falling-emoji');
            
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            emoji.style.left = `${Math.random() * window.innerWidth}px`;
            
            emoji.style.animationDelay = `${Math.random() * 2}s`;
            
            emojiContainer.appendChild(emoji);
        }
    }


    // Ketika tombol "Putar Musik Romantis" diklik
    playMusicBtn.addEventListener('click', () => {
        // Hentikan lagu pertama jika masih berjalan
        firstSong.pause();
        firstSong.currentTime = 0;

        // Putar lagu romantis
        loveMusic.play();
        playMusicBtn.textContent = 'Musik Romantis Bermain';

        // Animasi pesawat dan emoji
        animateAirplane();
        createFallingEmojis();
    });

    document.addEventListener('DOMContentLoaded', () => {
        const bagusGaBtn = document.getElementById('bagusGaBtn');
        
        bagusGaBtn.addEventListener('click', () => {
            // Ganti nomor HP dengan nomor WhatsApp Anda
            const phoneNumber = '6281400796283'; // Contoh: kode negara + nomor HP tanpa tanda +
            
            // Pesan default
            const message = 'Hai sayangku, aku harap kamu suka surprise-nya ❤️🥰';
            
            // Buka WhatsApp Web atau Aplikasi
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');

            function blinkButton() {
                const bagusGaBtn = document.getElementById('bagusGaBtn');
                bagusGaBtn.style.animation = 'blink 1s infinite';
            }
            
        });
    });
});