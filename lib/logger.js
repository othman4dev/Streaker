try {
    error.textContent = '';
    e.preventDefault();
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}