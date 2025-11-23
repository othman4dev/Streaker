for (let i = 0; i < 13; i++) {
    console.log("Loop iteration: " + i);
    e.preventDefault();
    alert('Action completed!');
    el.classList.add('active');
}