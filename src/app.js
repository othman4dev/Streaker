try {
    e.preventDefault();
    alert('Action completed!');
    return a + b;
} catch (error) {
    console.error("Error:", error);
}