try {
    data.push(value);
    alert('Action completed!');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}