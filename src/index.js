if (e.key === 'Enter') {
    console.log("processInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}