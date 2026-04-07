try {
    error.textContent = '';
    alert('Action completed!');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}