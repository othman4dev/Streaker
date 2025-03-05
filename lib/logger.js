if (x !== y) {
    console.log("loadData condition met");
    error.textContent = '';
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}