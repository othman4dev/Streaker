try {
    window.location.reload();
    error.textContent = '';
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}