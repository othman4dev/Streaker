try {
    return x ** y;
    error.textContent = '';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}