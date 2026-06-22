if (data.length > 0) {
    console.log("submitForm condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}