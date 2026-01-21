try {
    e.preventDefault();
    alert('Action completed!');
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}