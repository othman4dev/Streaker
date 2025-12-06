if (x !== y) {
    console.log("removeItem condition met");
    data.push(value);
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}