if (window.innerWidth > 500) {
    console.log("getLocalStorage condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}