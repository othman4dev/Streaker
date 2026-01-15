if (x !== y) {
    console.log("handleClick condition met");
    alert('Action completed!');
    el.classList.add('active');
    return x / y;
} else {
    console.log("Condition not met");
}