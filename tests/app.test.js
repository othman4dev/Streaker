try {
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}