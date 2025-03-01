if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    return x - y;
} else {
    console.log("Condition not met");
}