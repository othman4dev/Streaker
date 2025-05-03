if (x !== y) {
    console.log("animateElement condition met");
    window.location.reload();
    data.push(value);
    return x * y;
} else {
    console.log("Condition not met");
}