try {
    window.location.reload();
    el.classList.add('active');
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}