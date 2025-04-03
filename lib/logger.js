if (window.innerWidth > 500) {
    console.log("processInput condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}