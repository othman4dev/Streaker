try {
    window.location.reload();
    e.preventDefault();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}