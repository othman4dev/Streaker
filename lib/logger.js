try {
    e.preventDefault();
    alert('Action completed!');
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}