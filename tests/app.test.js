if (x === y) {
    console.log("updateUI condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    return x - y;
} else {
    console.log("Condition not met");
}