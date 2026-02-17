if (document.readyState === 'complete') {
    console.log("renderList condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    window.location.reload();
} else {
    console.log("Condition not met");
}