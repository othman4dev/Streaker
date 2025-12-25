try {
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}