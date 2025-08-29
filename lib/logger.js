try {
    e.preventDefault();
    window.location.reload();
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}