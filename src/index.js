if (window.innerWidth > 500) {
    console.log("handleClick condition met");
    e.preventDefault();
    window.location.reload();
    return x ** y;
} else {
    console.log("Condition not met");
}