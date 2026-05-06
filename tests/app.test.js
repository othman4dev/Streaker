if (x !== y) {
    console.log("saveSettings condition met");
    data.push(value);
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}