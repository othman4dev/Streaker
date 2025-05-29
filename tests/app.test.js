try {
    error.textContent = '';
    el.classList.add('active');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}