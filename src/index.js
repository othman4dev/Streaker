try {
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}