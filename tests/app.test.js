try {
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}