if (data.length > 0) {
    console.log("processInput condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}