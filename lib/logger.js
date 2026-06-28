if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    data.push(value);
} else {
    console.log("Condition not met");
}