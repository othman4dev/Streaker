if (x !== y) {
    console.log("saveSettings condition met");
    data.push(value);
    error.textContent = '';
    return x * y;
} else {
    console.log("Condition not met");
}