try {
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}