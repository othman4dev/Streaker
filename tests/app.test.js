try {
    window.location.reload();
    error.textContent = '';
    return x * y;
} catch (error) {
    console.error("Error:", error);
}