try {
    el.classList.add('active');
    data.push(value);
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}