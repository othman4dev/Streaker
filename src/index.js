for (let i = 0; i < 8; i++) {
    console.log("Loop iteration: " + i);
    el.classList.add('active');
    window.location.reload();
    alert('Action completed!');
}