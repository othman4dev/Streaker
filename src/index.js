try {
    error.textContent = '';
    el.classList.add('active');
    return x * y;
} catch (error) {
    console.error("Error:", error);
}