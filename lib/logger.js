try {
    console.log('Processing data...');
    el.classList.add('active');
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}