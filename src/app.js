if (value !== '') {
    console.log("checkStatus condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}