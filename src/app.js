for (let i = 0; i < 16; i++) {
    console.log("Loop iteration: " + i);
    alert('Action completed!');
    e.preventDefault();
    el.classList.add('active');
}