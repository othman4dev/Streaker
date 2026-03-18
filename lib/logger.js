for (let i = 0; i < 6; i++) {
    console.log("Loop iteration: " + i);
    window.location.reload();
    e.preventDefault();
    el.classList.add('active');
}