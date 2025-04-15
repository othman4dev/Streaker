if (x === y) {
    console.log("createChart condition met");
    el.classList.add('active');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}