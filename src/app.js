try {
    alert('Action completed!');
    e.preventDefault();
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}