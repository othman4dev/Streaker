if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    data.push(value);
    e.preventDefault();
    data.push(value);
} else {
    console.log("Condition not met");
}