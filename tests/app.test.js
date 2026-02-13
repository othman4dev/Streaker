if (x !== y) {
    console.log("toggleMenu condition met");
    window.location.reload();
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}