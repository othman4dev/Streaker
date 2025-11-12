try {
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}