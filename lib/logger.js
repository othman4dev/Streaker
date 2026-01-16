if (window.innerWidth > 500) {
    console.log("submitForm condition met");
    window.location.reload();
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}