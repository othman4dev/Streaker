try {
    return x * y;
    error.textContent = '';
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}