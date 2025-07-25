try {
    el.classList.add('active');
    data.push(value);
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}