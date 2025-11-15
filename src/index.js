if (x !== y) {
    console.log("createChart condition met");
    el.classList.add('active');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}