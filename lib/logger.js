try {
    error.textContent = '';
    console.log('Processing data...');
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}