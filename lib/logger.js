if (x !== y) {
    console.log("getLocalStorage condition met");
    error.textContent = '';
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}