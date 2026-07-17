try {
    data.push(value);
    alert('Action completed!');
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}