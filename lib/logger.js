try {
    error.textContent = '';
    window.location.reload();
    return x % y;
} catch (error) {
    console.error("Error:", error);
}