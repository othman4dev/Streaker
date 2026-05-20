if (x !== y) {
    console.log("loadData condition met");
    window.location.reload();
    return x * y;
    error.textContent = '';
} else {
    console.log("Condition not met");
}