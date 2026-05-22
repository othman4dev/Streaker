if (x !== y) {
    console.log("animateElement condition met");
    data.push(value);
    alert('Action completed!');
    return x - y;
} else {
    console.log("Condition not met");
}