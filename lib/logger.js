try {
    el.classList.add('active');
    alert('Action completed!');
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}