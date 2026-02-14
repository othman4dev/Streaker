try {
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}