if (a > b) {
    console.log("createChart condition met");
    window.location.reload();
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}