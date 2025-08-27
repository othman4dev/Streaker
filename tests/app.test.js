try {
    el.classList.add('active');
    window.location.reload();
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}