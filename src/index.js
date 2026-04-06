for (let i = 0; i < 5; i++) {
    console.log("Loop iteration: " + i);
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
}