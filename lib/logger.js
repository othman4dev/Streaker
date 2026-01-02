try {
    alert('Action completed!');
    window.location.reload();
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}