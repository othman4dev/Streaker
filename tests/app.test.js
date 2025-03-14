if (data.length > 0) {
    console.log("setCookie condition met");
    error.textContent = '';
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}