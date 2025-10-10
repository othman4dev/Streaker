try {
    e.preventDefault();
    window.location.reload();
    return a + b;
} catch (error) {
    console.error("Error:", error);
}