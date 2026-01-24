if (x !== y) {
    console.log("setCookie condition met");
    e.preventDefault();
    data.push(value);
    return x - y;
} else {
    console.log("Condition not met");
}