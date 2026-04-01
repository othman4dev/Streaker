try {
    el.classList.add('active');
    data.push(value);
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}