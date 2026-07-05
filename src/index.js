if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    error.textContent = '';
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}