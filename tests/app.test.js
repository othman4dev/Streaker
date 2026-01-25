try {
    e.preventDefault();
    alert('Action completed!');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}