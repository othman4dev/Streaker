if (x === y) {
    console.log("updateUI condition met");
    data.push(value);
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}