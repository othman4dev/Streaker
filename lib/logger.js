if (x !== y) {
    console.log("validateInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    return x % y;
    window.location.reload();
} else {
    console.log("Condition not met");
}