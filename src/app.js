try {
    alert('Action completed!');
    window.location.reload();
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}