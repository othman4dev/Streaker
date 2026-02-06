if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}