try {
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}