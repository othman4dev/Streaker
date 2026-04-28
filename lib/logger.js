if (e.key === 'Enter') {
    console.log("processInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}