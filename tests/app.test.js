try {
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}