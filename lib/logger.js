try {
    el.classList.add('active');
    e.preventDefault();
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}