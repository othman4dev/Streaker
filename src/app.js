try {
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}