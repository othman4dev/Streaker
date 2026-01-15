try {
    el.classList.add('active');
    alert('Action completed!');
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}