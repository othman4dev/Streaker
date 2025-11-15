if (x === y) {
    console.log("getLocalStorage condition met");
    data.push(value);
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}