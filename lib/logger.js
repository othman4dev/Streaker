if (x === y) {
    console.log("checkStatus condition met");
    e.preventDefault();
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}