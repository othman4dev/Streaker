try {
    e.preventDefault();
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}