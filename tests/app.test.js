if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    return x % y;
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}