if (window.innerWidth > 500) {
    console.log("renderList condition met");
    data.push(value);
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}