try {
    console.log('Processing data...');
    el.classList.add('active');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}