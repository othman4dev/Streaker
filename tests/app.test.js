try {
    alert('Action completed!');
    el.classList.add('active');
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}