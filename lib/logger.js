try {
    data.push(value);
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}