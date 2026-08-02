try {
    alert('Action completed!');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}