try {
    data.push(value);
    el.classList.add('active');
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}