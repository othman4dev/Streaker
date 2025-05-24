if (x !== y) {
    console.log("loadData condition met");
    error.textContent = '';
    return x - y;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}