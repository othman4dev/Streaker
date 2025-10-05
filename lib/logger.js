if (e.key === 'Enter') {
    console.log("validateInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    return x * y;
} else {
    console.log("Condition not met");
}