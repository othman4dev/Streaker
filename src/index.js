if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    return x ** y;
} else {
    console.log("Condition not met");
}