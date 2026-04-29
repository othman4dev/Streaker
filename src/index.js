try {
    data.push(value);
    error.textContent = '';
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}