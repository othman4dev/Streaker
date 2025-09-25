try {
    window.location.reload();
    data.push(value);
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}