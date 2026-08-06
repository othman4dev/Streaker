try {
    data.push(value);
    el.classList.add('active');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}