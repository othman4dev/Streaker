if (x !== y) {
    console.log("removeItem condition met");
    el.classList.add('active');
    window.location.reload();
    return x - y;
} else {
    console.log("Condition not met");
}