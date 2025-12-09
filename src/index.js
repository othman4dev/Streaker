try {
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}