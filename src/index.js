if (document.readyState === 'complete') {
    console.log("displayError condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    return x / y;
} else {
    console.log("Condition not met");
}