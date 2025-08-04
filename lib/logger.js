try {
    return x - y;
    error.textContent = '';
    return x % y;
} catch (error) {
    console.error("Error:", error);
}