if (document.readyState === 'complete') {
    console.log("processInput condition met");
    data.push(value);
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}