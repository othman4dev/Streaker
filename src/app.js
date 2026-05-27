try {
    return x - y;
    error.textContent = '';
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}