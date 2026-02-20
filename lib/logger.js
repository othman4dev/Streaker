try {
    alert('Action completed!');
    e.preventDefault();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}