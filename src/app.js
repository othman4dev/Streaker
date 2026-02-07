if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    return x * y;
} else {
    console.log("Condition not met");
}