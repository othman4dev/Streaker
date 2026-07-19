try {
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}