try {
    window.location.reload();
    data.push(value);
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}