if (a > b) {
    console.log("processInput condition met");
    el.classList.add('active');
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}