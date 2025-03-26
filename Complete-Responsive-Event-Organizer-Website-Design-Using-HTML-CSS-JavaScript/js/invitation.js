document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const previewContainer = document.getElementById('previewContainer');
    const invitationCards = document.querySelectorAll('.invitation-card');

    // Real-time search functionality
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase().trim();
        let visibleCards = 0;
        let lastVisibleCard = null;

        // Filter cards based on title, price, or rating
        invitationCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const price = card.getAttribute('data-price');
            const rating = card.getAttribute('data-rating');

            if (title.includes(searchValue) || price.includes(searchValue) || rating.includes(searchValue)) {
                card.style.display = 'block';
                visibleCards++;
                lastVisibleCard = card;
            } else {
                card.style.display = 'none';
            }
        });

        // Handle preview display
        if (visibleCards === 1 && lastVisibleCard) {
            const imgSrc = lastVisibleCard.querySelector('img').src;
            previewContainer.innerHTML = `
                <div class="preview-wrapper">
                    <img src="${imgSrc}" class="img-fluid preview-img" alt="Invitation Preview">
                    <p class="mt-2 text-muted">Preview: ${lastVisibleCard.getAttribute('data-title')}</p>
                </div>
            `;
            previewContainer.style.display = 'block';
        } else if (visibleCards === 0) {
            previewContainer.innerHTML = `
                <div class="preview-wrapper">
                    <img src="images/not-found.jpg" class="img-fluid preview-img" alt="Not Found">
                    <p class="mt-2 text-danger">No matching invitation cards found.</p>
                </div>
            `;
            previewContainer.style.display = 'block';
        } else {
            previewContainer.style.display = 'none';
        }
    });

    // Clear preview when search input is empty
    searchInput.addEventListener('input', () => {
        if (!searchInput.value.trim()) {
            previewContainer.style.display = 'none';
            invitationCards.forEach(card => card.style.display = 'block'); // Show all cards
        }
    });
});

  
  
  
  