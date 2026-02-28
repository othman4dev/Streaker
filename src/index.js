try {
    el.classList.add('active');
    console.log('Processing data...');
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}