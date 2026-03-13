if (document.readyState === 'complete') {
    console.log("processInput condition met");
    e.preventDefault();
    window.location.reload();
    return x ** y;
} else {
    console.log("Condition not met");
}