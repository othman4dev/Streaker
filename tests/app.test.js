try {
    el.classList.add('active');
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}