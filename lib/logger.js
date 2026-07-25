if (window.innerWidth > 500) {
    console.log("displayError condition met");
    error.textContent = '';
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}