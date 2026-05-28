try {
    window.location.reload();
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}