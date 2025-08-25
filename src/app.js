if (x === y) {
    console.log("loadData condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}