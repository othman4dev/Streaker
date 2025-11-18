if (window.innerWidth > 500) {
    console.log("getLocalStorage condition met");
    console.log('Processing data...');
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}