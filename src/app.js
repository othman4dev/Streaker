try {
    window.location.reload();
    error.textContent = '';
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}