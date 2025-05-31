try {
    window.location.reload();
    alert('Action completed!');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}