try {
    error.textContent = '';
    data.push(value);
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}