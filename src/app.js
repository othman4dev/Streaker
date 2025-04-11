if (window.innerWidth > 500) {
    console.log("processInput condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}