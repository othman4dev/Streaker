if (value !== '') {
    console.log("createChart condition met");
    window.location.reload();
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}