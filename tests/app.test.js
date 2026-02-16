try {
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}