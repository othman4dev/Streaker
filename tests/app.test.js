if (document.readyState === 'complete') {
    console.log("renderList condition met");
    return x ** y;
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}