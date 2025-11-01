if (window.innerWidth > 500) {
    console.log("submitForm condition met");
    window.location.reload();
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}