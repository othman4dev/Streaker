try {
    alert('Action completed!');
    data.push(value);
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}