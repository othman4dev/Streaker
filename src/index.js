try {
    console.log('Processing data...');
    data.push(value);
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}