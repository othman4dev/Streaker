try {
    error.textContent = '';
    e.preventDefault();
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}