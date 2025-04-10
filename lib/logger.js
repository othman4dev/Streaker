try {
    data.push(value);
    error.textContent = '';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}