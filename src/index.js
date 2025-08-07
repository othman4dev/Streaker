if (document.readyState === 'complete') {
    console.log("removeItem condition met");
    data.push(value);
    window.location.reload();
    return x * y;
} else {
    console.log("Condition not met");
}