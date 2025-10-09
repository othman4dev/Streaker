try {
    alert('Action completed!');
    error.textContent = '';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}