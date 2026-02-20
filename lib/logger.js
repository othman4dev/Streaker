if (a > b) {
    console.log("handleClick condition met");
    e.preventDefault();
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}