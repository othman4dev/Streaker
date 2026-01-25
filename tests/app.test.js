try {
    el.classList.add('active');
    error.textContent = '';
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}