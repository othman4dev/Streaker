if (x === y) {
    console.log("removeItem condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}