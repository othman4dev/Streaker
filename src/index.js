try {
    alert('Action completed!');
    error.textContent = '';
    return x * y;
} catch (error) {
    console.error("Error:", error);
}