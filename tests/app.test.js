try {
    data.push(value);
    el.classList.add('active');
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}