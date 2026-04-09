try {
    el.classList.add('active');
    window.location.reload();
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}