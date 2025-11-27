const musik = document.getElementById("musik");
musik.volume = 0.6;

function randomPos(max) {
    return Math.floor(Math.random() * max);
}

function buatLove() {
    const love= document.createElement("div");
    love.classList.add("love");
    love.style.left = randomPos(window.innerWidth) + "px";
    love.style.animationDuration = randomPos(5) + 3 + "s";
    love.textContent = "❤️";
    document.body.appendChild(love);

    setTimeout(() => love.remove(), 8000);
}

setInterval(buatLove, 500);

function tampilkanPesan() {
    const pesan = document.getElementById("pesan");
    pesan.innerHTML = "Happy Birthday sayangg, aku bersyukur banget punya wanita cantik, imup, dan lucuu seperti kamu dedee. Segala hal yang kita lalui selama kurang lebih 1 tahun, kamu banyak merasakan betapa capeknya menjalin hubungan cowo seperti aku ini. Tapi aku yakin, tidak ada yang lebih cocok dari kita berdua tauk sayang. Aku merasa bahwa kita itu cocok banget nget nget. Aku selalu berdoa dan berusaha lebih lagi kedepannya untuk kamu sayang dan hubungan kita sayangg. Semoga kita selalu bersama hingga akhirat kelak ya sayangg, sebgai pasangan hidup semati. Semoga di umur kamu yang ke 17th ini menjadi umur terbaik bagi kamu dari umur umur kamu sebelumnya, aaamiin. And last, Aku sayang banget sama kamu bocilll. I Love You So Muchh🤍💐";

    ledakkanConfetti();
}

function ledakkanConfetti() {
    for (let i = 0; i < 100; i++){
        const c = document.createElement("div");
        c.classList.add("confetti");
        c.style.left = Math.random() * window.innerWidth + "px";
        c.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}

const body = document.body;
const hidden = document.getElementById("modeBtn");

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    modeBtn.textContent = body.classList.contains("dark") ? "☀️ Mode Siang": "🌙 Mode Malam";
})