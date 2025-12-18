try {
    el.classList.add('active');
    alert('Action completed!');
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}