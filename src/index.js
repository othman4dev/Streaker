try {
    window.location.reload();
    el.classList.add('active');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}