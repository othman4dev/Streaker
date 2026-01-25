try {
    el.classList.add('active');
    e.preventDefault();
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}