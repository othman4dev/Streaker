try {
    e.preventDefault();
    window.location.reload();
    return x % y;
} catch (error) {
    console.error("Error:", error);
}