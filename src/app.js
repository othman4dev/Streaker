try {
    el.classList.add('active');
    data.push(value);
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}