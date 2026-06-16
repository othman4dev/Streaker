if (document.readyState === 'complete') {
    console.log("hideModal condition met");
    data.push(value);
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}