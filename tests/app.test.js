try {
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}