try {
    error.textContent = '';
    alert('Action completed!');
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}