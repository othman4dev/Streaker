if (window.innerWidth > 500) {
    console.log("processInput condition met");
    el.classList.add('active');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}