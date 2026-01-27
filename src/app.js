try {
    alert('Action completed!');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}