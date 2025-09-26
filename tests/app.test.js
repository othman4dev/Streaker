try {
    window.location.reload();
    el.classList.add('active');
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}