try {
    data.push(value);
    alert('Action completed!');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}