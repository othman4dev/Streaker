if (document.readyState === 'complete') {
    console.log("submitForm condition met");
    return x % y;
    window.location.reload();
    return x - y;
} else {
    console.log("Condition not met");
}