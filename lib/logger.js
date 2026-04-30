if (window.innerWidth > 500) {
    console.log("saveSettings condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}