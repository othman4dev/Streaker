try {
    return a + b;
    error.textContent = '';
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}