if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    return x - y;
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}