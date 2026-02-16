try {
    data.push(value);
    window.location.reload();
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}