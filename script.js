let gamesDisplayed = 6;

function showMoreGames() {
    // إظهار جميع الألعاب المخفية
    const games = document.querySelectorAll('.game.hidden');
    games.forEach(game => {
        game.classList.remove('hidden');
    });
    // إخفاء زر "إظهار الجميع" بعد الضغط عليه
    document.getElementById('show-more').style.display = 'none';
}

// إخفاء الألعاب الإضافية بشكل افتراضي عند تحميل الصفحة
window.onload = () => {
    const games = document.querySelectorAll('.game');
    games.forEach((game, index) => {
        if (index >= gamesDisplayed) {
            game.classList.add('hidden');
        }
    });
};

    
    
    // Simple search functionality
    document.getElementById("searchInput").addEventListener("input", function () {
        const searchValue = this.value.toLowerCase();
        const gameBoxes = document.querySelectorAll(".game-box");
        gameBoxes.forEach(box => {
            const gameTitle = box.querySelector("h4").textContent.toLowerCase();
            box.style.display = gameTitle.includes(searchValue) ? "block" : "none";
        });
    });

    // هذا الكود اختياري و لا حاجة له للوظيفة الأساسية، لكن يمكنك استخدامه إذا أردت إضافة أي تأثيرات إضافية.
document.querySelector('.whatsapp-btn').addEventListener('mouseover', function() {
    this.style.animation = 'pulse 0.8s infinite';
});

document.querySelector('.whatsapp-btn').addEventListener('mouseout', function() {
    this.style.animation = 'pulse 1.5s infinite';
});

