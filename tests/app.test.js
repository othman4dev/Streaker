if (x !== y) {
    console.log("loadData condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}