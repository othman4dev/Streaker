try {
    console.log('Processing data...');
    error.textContent = '';
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}