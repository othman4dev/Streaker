for (let i = 0; i < 6; i++) {
    console.log("Loop iteration: " + i);
    e.preventDefault();
    window.location.reload();
    el.classList.add('active');
}