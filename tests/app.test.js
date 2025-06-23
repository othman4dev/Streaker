try {
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}