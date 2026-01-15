try {
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}