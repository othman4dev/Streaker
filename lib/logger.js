try {
    e.preventDefault();
    return x * y;
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}