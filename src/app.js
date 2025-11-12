if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    e.preventDefault();
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}