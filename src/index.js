try {
    data.push(value);
    error.textContent = '';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}