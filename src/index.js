try {
    console.log('Processing data...');
    el.classList.add('active');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}