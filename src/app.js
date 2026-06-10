try {
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}