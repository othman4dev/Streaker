try {
    window.location.reload();
    error.textContent = '';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}