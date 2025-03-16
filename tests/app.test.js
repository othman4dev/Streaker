if (a > b) {
    console.log("getLocalStorage condition met");
    data.push(value);
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}