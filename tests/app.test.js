try {
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}