try {
    return a + b;
    error.textContent = '';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}