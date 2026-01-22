try {
    window.location.reload();
    data.push(value);
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}