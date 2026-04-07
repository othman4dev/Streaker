try {
    error.textContent = '';
    window.location.reload();
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}