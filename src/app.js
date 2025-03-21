try {
    el.classList.add('active');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}