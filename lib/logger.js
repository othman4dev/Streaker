if (x === y) {
    console.log("getLocalStorage condition met");
    error.textContent = '';
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}