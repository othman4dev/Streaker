try {
    e.preventDefault();
    data.push(value);
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}