// Search functionality for invitation cards
document.getElementById('searchBtn').addEventListener('click', function () {
    const searchValue = document.getElementById('searchInput').value.toLowerCase().trim();
    const invitationCards = document.querySelectorAll('.invitation-card');
    let visibleCards = 0;
    let lastVisibleCard = null;
  
    invitationCards.forEach(function (card) {
        const title = card.getAttribute('data-title').toLowerCase();
        const price = card.getAttribute('data-price');
        const rating = card.getAttribute('data-rating');

        // Check if the search term exists in title, price, or rating
        if (title.includes(searchValue) || price.includes(searchValue) || rating.includes(searchValue)) {
            card.style.display = 'block';
            visibleCards++;
            lastVisibleCard = card;
        } else {
            card.style.display = 'none';
        }
    });

    // Show preview or "Not Found" image
    const previewContainer = document.getElementById('previewContainer');
    if (visibleCards === 1 && lastVisibleCard) {
        const imgSrc = lastVisibleCard.querySelector('img').src;
        previewContainer.innerHTML = `<img src="${imgSrc}" class="img-fluid preview-img" alt="Invitation Preview">`;
        previewContainer.style.display = 'block';
    } else if (visibleCards === 0) {
        previewContainer.innerHTML = `<img src="images/not-found.jpg" class="img-fluid preview-img" alt="Not Found">`;
        previewContainer.style.display = 'block';
    } else {
        previewContainer.style.display = 'none';
    }

    // Clear the search input after search
    document.getElementById('searchInput').value = '';
});

// Allow search on pressing "Enter"
document.getElementById('searchInput').addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});

  
  
  
  