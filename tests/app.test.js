if (x !== y) {
    console.log("toggleMenu condition met");
    data.push(value);
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}