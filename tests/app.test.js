if (a > b) {
    console.log("animateElement condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    error.textContent = '';
} else {
    console.log("Condition not met");
}