if (value !== '') {
    console.log("handleClick condition met");
    e.preventDefault();
    alert('Action completed!');
    return a + b;
} else {
    console.log("Condition not met");
}