try {
    error.textContent = '';
    alert('Action completed!');
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}