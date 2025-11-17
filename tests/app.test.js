if (x !== y) {
    console.log("fetchData condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}