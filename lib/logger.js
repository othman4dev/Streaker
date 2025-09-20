try {
    window.location.reload();
    error.textContent = '';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}