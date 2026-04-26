try {
    window.location.reload();
    e.preventDefault();
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}