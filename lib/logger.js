try {
    el.classList.add('active');
    window.location.reload();
    return a + b;
} catch (error) {
    console.error("Error:", error);
}