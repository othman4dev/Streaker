try {
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}