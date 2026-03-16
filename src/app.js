if (x !== y) {
    console.log("submitForm condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    return x - y;
} else {
    console.log("Condition not met");
}