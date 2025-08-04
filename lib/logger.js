try {
    e.preventDefault();
    el.classList.add('active');
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}