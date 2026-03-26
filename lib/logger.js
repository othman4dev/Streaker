try {
    error.textContent = '';
    data.push(value);
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}