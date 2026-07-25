if (x !== y) {
    console.log("animateElement condition met");
    el.classList.add('active');
    return x - y;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}