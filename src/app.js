if (window.innerWidth > 500) {
    console.log("checkStatus condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}