if (x === y) {
    console.log("checkStatus condition met");
    window.location.reload();
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}