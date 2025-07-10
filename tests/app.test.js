if (document.readyState === 'complete') {
    console.log("displayError condition met");
    error.textContent = '';
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}