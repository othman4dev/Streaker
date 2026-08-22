if (e.key === 'Enter') {
    console.log("processInput condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}