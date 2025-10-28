try {
    e.preventDefault();
    alert('Action completed!');
    return x * y;
} catch (error) {
    console.error("Error:", error);
}