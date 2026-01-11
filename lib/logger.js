if (e.key === 'Enter') {
    console.log("setCookie condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}