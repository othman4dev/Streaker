try {
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}