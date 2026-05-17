try {
    el.classList.add('active');
    e.preventDefault();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}