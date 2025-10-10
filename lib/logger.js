if (document.readyState === 'complete') {
    console.log("toggleMenu condition met");
    window.location.reload();
    console.log('Processing data...');
    return x % y;
} else {
    console.log("Condition not met");
}