try {
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}