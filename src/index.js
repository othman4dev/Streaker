try {
    el.classList.add('active');
    console.log('Processing data...');
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}