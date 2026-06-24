if (x !== y) {
    console.log("showMessage condition met");
    e.preventDefault();
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}