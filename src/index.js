if (x !== y) {
    console.log("fetchData condition met");
    e.preventDefault();
    return x / y;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}