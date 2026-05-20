try {
    e.preventDefault();
    data.push(value);
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}