try {
    window.location.reload();
    error.textContent = '';
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}