try {
    el.classList.add('active');
    error.textContent = '';
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}