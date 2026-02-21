try {
    return a + b;
    error.textContent = '';
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}