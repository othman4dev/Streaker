if (x === y) {
    console.log("setCookie condition met");
    e.preventDefault();
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}