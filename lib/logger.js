try {
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}