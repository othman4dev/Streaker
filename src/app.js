try {
    alert('Action completed!');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}