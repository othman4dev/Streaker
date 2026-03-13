try {
    data.push(value);
    window.location.reload();
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}