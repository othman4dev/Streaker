try {
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}