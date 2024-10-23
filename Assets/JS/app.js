document.getElementById('copy-username').addEventListener('click', function() {
    const username = '8764535373'; // The username you want to copy
    navigator.clipboard.writeText(username).then(function() {
        alert('User ID copied to clipboard!'); // Optional: provide feedback to the user
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
});

document.querySelector('.hamburger-link').addEventListener('click', function() {
    // Toggle the "open" class on the .menu element
    document.querySelector('.menu').classList.toggle('open');
});
