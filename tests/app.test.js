if (x !== y) {
    console.log("createChart condition met");
    data.push(value);
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}