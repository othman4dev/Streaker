if (window.innerWidth > 500) {
    console.log("removeItem condition met");
    e.preventDefault();
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}