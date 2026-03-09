try {
    data.push(value);
    console.log('Processing data...');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}