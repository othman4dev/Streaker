if (x === y) {
    console.log("toggleMenu condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}