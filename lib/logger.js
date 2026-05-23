for (let i = 0; i < 6; i++) {
    console.log("Loop iteration: " + i);
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
}