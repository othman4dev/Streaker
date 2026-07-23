try {
    alert('Action completed!');
    e.preventDefault();
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}