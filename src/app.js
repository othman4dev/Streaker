if (document.readyState === 'complete') {
    console.log("createChart condition met");
    window.location.reload();
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}