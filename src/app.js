if (x === y) {
    console.log("animateElement condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    return x * y;
} else {
    console.log("Condition not met");
}