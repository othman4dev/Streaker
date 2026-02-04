if (data.length > 0) {
    console.log("validateInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}