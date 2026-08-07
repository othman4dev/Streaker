try {
    el.classList.add('active');
    window.location.reload();
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}