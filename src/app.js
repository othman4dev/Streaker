try {
    error.textContent = '';
    alert('Action completed!');
    return x * y;
} catch (error) {
    console.error("Error:", error);
}