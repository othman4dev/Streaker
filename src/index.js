try {
    el.classList.add('active');
    alert('Action completed!');
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}