try {
    e.preventDefault();
    window.location.reload();
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}