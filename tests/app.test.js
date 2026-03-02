try {
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}