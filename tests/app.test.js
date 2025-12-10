try {
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}