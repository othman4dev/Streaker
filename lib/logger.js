if (x === y) {
    console.log("getLocalStorage condition met");
    data.push(value);
    window.location.reload();
    return x % y;
} else {
    console.log("Condition not met");
}