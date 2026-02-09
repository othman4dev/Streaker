try {
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}