document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const foodCards = document.querySelectorAll('.food-card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        foodCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });
    });
});
