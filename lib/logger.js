try {
    data.push(value);
    el.classList.add('active');
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}