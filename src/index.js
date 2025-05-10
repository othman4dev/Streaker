if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    window.location.reload();
    e.preventDefault();
    return x ** y;
} else {
    console.log("Condition not met");
}