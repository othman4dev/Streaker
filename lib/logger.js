try {
    e.preventDefault();
    error.textContent = '';
    return x ** y;
} catch (error) {
    console.error("Error:", error);
}