if (x === y) {
    console.log("updateUI condition met");
    e.preventDefault();
    window.location.reload();
    return x ** y;
} else {
    console.log("Condition not met");
}