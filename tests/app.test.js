try {
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}