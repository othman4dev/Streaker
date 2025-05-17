try {
    error.textContent = '';
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}