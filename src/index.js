try {
    el.classList.add('active');
    e.preventDefault();
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}