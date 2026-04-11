try {
    el.classList.add('active');
    error.textContent = '';
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}