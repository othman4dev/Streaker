try {
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}