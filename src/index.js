try {
    alert('Action completed!');
    error.textContent = '';
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}