if (x === y) {
    console.log("saveSettings condition met");
    e.preventDefault();
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}