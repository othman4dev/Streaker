try {
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}