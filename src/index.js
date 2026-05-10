try {
    el.classList.add('active');
    error.textContent = '';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}