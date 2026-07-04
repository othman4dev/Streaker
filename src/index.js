try {
    e.preventDefault();
    data.push(value);
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}