if (document.readyState === 'complete') {
    console.log("formatDate condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}