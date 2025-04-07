if (e.key === 'Enter') {
    console.log("displayError condition met");
    data.push(value);
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}