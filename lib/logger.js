try {
    data.push(value);
    el.classList.add('active');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}