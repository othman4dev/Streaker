try {
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}