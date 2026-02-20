if (value !== '') {
    console.log("animateElement condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}