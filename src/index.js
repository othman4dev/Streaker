try {
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}