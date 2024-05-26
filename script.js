function changeJewelry(type) {
    const img = document.getElementById('jewelry-img');
    if (type === 'lehenga') {
        img.src = 'lehenga.jpg';
    } else if (type === 'saree') {
        img.src = 'saree.jpg';
    } else if (type === 'gown') {
        img.src = 'gown.jpg';
    }
}

document.getElementById('submit-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Normally, here you'd send the form data to your server
    alert('Form submitted! Check your email for confirmation.');
    // Redirect to a different page or update the UI as needed
});
