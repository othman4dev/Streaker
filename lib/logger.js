try {
    return x % y;
    error.textContent = '';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}