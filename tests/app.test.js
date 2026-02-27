if (window.innerWidth > 500) {
    console.log("setCookie condition met");
    window.location.reload();
    console.log('Processing data...');
    e.preventDefault();
} else {
    console.log("Condition not met");
}