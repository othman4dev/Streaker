try {
    data.push(value);
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}