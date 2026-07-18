if (e.key === 'Enter') {
    console.log("setCookie condition met");
    e.preventDefault();
    return a + b;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}