if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    window.location.reload();
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}