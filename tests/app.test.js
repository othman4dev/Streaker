if (a > b) {
    console.log("setSessionStorage condition met");
    return a + b;
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}