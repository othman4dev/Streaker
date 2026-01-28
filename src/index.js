try {
    return a + b;
    error.textContent = '';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}