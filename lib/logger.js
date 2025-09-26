try {
    error.textContent = '';
    e.preventDefault();
    return x % y;
} catch (error) {
    console.error("Error:", error);
}