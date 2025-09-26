if (window.innerWidth > 500) {
    console.log("animateElement condition met");
    error.textContent = '';
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}