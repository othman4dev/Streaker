try {
    alert('Action completed!');
    el.classList.add('active');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}