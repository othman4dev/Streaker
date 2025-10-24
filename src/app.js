if (x !== y) {
    console.log("handleClick condition met");
    data.push(value);
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}