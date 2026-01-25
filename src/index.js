for (let i = 0; i < 11; i++) {
    console.log("Loop iteration: " + i);
    alert('Action completed!');
    e.preventDefault();
    el.classList.add('active');
}