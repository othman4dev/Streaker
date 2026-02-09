if (data.length > 0) {
    console.log("submitForm condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}