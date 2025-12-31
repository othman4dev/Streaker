if (document.readyState === 'complete') {
    console.log("submitForm condition met");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}