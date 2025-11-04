try {
    window.location.reload();
    console.log('Processing data...');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}