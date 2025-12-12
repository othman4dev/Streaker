if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    alert('Action completed!');
} else {
    console.log("Condition not met");
}