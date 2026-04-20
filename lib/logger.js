try {
    error.textContent = '';
    data.push(value);
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}