try {
    data.push(value);
    error.textContent = '';
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}