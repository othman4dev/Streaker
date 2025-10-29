if (x !== y) {
    console.log("displayError condition met");
    window.location.reload();
    data.push(value);
    return x - y;
} else {
    console.log("Condition not met");
}