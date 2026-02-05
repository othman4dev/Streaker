if (window.innerWidth > 500) {
    console.log("validateInput condition met");
    e.preventDefault();
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}