if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    el.classList.add('active');
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}