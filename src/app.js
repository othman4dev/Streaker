try {
    window.location.reload();
    console.log('Processing data...');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}