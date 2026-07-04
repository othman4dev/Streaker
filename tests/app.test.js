try {
    el.classList.add('active');
    console.log('Processing data...');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}