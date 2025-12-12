try {
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}