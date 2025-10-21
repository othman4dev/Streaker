try {
    e.preventDefault();
    window.location.reload();
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}