try {
    e.preventDefault();
    error.textContent = '';
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}