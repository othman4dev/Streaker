if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}