try {
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}