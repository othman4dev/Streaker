try {
    el.classList.add('active');
    alert('Action completed!');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}