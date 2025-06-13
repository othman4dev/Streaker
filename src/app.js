try {
    window.location.reload();
    e.preventDefault();
    return x ** y;
} catch (error) {
    console.error("Error:", error);
}