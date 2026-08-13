try {
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    return a + b;
} catch (error) {
    console.error("Error:", error);
}