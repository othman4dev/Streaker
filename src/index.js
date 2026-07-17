if (document.readyState === 'complete') {
    console.log("processInput condition met");
    return x - y;
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}