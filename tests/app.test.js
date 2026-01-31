try {
    e.preventDefault();
    window.location.reload();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}