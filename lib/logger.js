try {
    alert('Action completed!');
    data.push(value);
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}