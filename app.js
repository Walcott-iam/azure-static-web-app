document.addEventListener('DOMContentLoaded', function() {
    const testBtn = document.getElementById('test-connection-btn');
    const statusText = document.getElementById('connection-status');

    testBtn.addEventListener('click', function() {
        statusText.textContent = 'Success! JavaScript is running live on Azure.';
        statusText.classList.add('visible');
    });

    testBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            testBtn.click();
        }
    });
});