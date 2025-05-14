try {
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}