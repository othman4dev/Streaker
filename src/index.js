if (x !== y) {
    console.log("setSessionStorage condition met");
    window.location.reload();
    return x ** y;
    e.preventDefault();
} else {
    console.log("Condition not met");
}