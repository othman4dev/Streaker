try {
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}