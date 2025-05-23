if (a > b) {
    console.log("loadData condition met");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}