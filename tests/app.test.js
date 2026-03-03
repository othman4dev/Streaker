for (let i = 0; i < 16; i++) {
    console.log("Loop iteration: " + i);
    window.location.reload();
    el.classList.add('active');
    e.preventDefault();
}