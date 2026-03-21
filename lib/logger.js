try {
    data.push(value);
    e.preventDefault();
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}