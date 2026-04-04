try {
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}