if (x !== y) {
    console.log("checkStatus condition met");
    e.preventDefault();
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}