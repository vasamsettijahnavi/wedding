// Search functionality
const searchBar = document.getElementById('search-bar');
const venueList = document.getElementById('venue-list');

searchBar.addEventListener('keyup', function() {
    const searchText = searchBar.value.toLowerCase();
    const venues = document.querySelectorAll('.venue-item');
    venues.forEach(venue => {
        const venueName = venue.querySelector('h3').textContent.toLowerCase();
        if (venueName.includes(searchText)) {
            venue.style.display = 'block';
        } else {
            venue.style.display = 'none';
        }
    });
});

// Filter functionality
const filterSelect = document.getElementById('filter-select');
filterSelect.addEventListener('change', function() {
    const selectedRating = filterSelect.value;
    const venues = document.querySelectorAll('.venue-item');
    venues.forEach(venue => {
        const venueRating = parseFloat(venue.getAttribute('data-rating'));
        if (selectedRating === 'all' || venueRating >= parseFloat(selectedRating)) {
            venue.style.display = 'block';
        } else {
            venue.style.display = 'none';
        }
    });
});

// Venue modal data handling
const venueModal = new bootstrap.Modal(document.getElementById('venue-modal'));
const modalVenueName = document.getElementById('modal-venue-name');
const modalCost = document.getElementById('modal-cost');
const modalRating = document.getElementById('modal-rating');
const modalLocation = document.getElementById('modal-location');
const modalReviews = document.getElementById('modal-reviews');

document.querySelectorAll('.venue-item button').forEach(button => {
    button.addEventListener('click', function() {
        modalVenueName.textContent = this.getAttribute('data-venue');
        modalCost.textContent = 'Cost: ' + this.getAttribute('data-cost');
        modalRating.textContent = 'Rating: ' + this.getAttribute('data-rating') + ' Stars';
        modalLocation.textContent = 'Location: ' + this.getAttribute('data-location');
        modalReviews.textContent = 'Reviews: ' + this.getAttribute('data-reviews');
    });
});
