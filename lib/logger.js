if (value !== '') {
    console.log("handleClick condition met");
    window.location.reload();
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}