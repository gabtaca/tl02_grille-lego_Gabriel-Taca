document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/photos');
    const photos = await response.json();

    const gallery = document.querySelector('.gallery');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const dateUploadedInput = document.getElementById('dateUploaded');
    const dateTakenInput = document.getElementById('dateTaken');
    const favoritesInput = document.getElementById('favorites');
    const tagsInput = document.getElementById('tags');

    // Function to render photos based on filters
    const renderPhotos = (photos) => {
        gallery.innerHTML = ''; // Clear previous photos

        photos.forEach(photo => {
            const photoElement = document.createElement('div');
            photoElement.className = 'photo';
            photoElement.innerHTML = `
                <img src="/uploads/${photo.filename}" alt="${photo.originalname}">
                <p>Date Uploaded: ${new Date(photo.dateUploaded).toLocaleDateString()}</p>
                <p>Date Taken: ${new Date(photo.dateTaken).toLocaleDateString()}</p>
                <p>Favorites: ${photo.favorites}</p>
                <p>Tags: ${photo.tags.join(', ')}</p>
            `;
            gallery.appendChild(photoElement);
        });
    };

    // Apply filters when button is clicked
    applyFiltersBtn.addEventListener('click', async () => {
        const filters = {
            dateUploaded: dateUploadedInput.value,
            dateTaken: dateTakenInput.value,
            favorites: favoritesInput.value,
            tags: tagsInput.value.split(',').map(tag => tag.trim())
        };

        const queryString = Object.keys(filters)
            .map(key => `${key}=${encodeURIComponent(filters[key])}`)
            .join('&');

        const response = await fetch(`/photos?${queryString}`);
        const filteredPhotos = await response.json();
        renderPhotos(filteredPhotos);
    });

    // Initial render of all photos
    renderPhotos(photos);
});