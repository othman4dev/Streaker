if (window.innerWidth > 500) {
    console.log("submitForm condition met");
    window.location.reload();
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}