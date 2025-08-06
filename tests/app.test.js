try {
    alert('Action completed!');
    e.preventDefault();
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}