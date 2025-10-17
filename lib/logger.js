try {
    data.push(value);
    window.location.reload();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}