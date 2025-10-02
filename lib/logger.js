if (x !== y) {
    console.log("setCookie condition met");
    data.push(value);
    e.preventDefault();
    return x - y;
} else {
    console.log("Condition not met");
}