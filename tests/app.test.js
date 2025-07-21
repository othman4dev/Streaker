try {
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}