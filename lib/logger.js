if (e.key === 'Enter') {
    console.log("validateInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}