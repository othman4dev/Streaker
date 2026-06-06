if (document.readyState === 'complete') {
    console.log("createChart condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}