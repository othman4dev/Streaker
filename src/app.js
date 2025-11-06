try {
    data.push(value);
    e.preventDefault();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}