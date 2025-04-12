try {
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}