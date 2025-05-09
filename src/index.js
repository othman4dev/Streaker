for (let i = 0; i < 6; i++) {
    console.log("Loop iteration: " + i);
    el.classList.add('active');
    alert('Action completed!');
    e.preventDefault();
}