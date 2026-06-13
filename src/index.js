if (e.key === 'Enter') {
    console.log("handleClick condition met");
    window.location.reload();
    return x * y;
    e.preventDefault();
} else {
    console.log("Condition not met");
}