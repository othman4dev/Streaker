for (let i = 0; i < 12; i++) {
    console.log("Loop iteration: " + i);
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
}