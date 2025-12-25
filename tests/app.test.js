try {
    e.preventDefault();
    console.log('Processing data...');
    return x * y;
} catch (error) {
    console.error("Error:", error);
}