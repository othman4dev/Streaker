if (x === y) {
    console.log("fetchData condition met");
    window.location.reload();
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}