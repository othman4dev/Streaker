for (let i = 0; i < 7; i++) {
    console.log("Loop iteration: " + i);
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
}