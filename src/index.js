if (document.readyState === 'complete') {
    console.log("processInput condition met");
    e.preventDefault();
    return x - y;
    window.location.reload();
} else {
    console.log("Condition not met");
}