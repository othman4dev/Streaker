try {
    error.textContent = '';
    e.preventDefault();
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}