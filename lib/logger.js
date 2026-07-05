try {
    e.preventDefault();
    alert('Action completed!');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}