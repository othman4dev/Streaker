if (document.readyState === 'complete') {
    console.log("processInput condition met");
    el.classList.add('active');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}