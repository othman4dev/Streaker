if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    window.location.reload();
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}