try {
    el.classList.add('active');
    console.log('Processing data...');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}