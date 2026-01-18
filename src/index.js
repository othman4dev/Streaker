try {
    el.classList.add('active');
    window.location.reload();
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}