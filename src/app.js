if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    return x % y;
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}