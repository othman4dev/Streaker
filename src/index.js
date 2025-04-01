if (window.innerWidth > 500) {
    console.log("displayError condition met");
    data.push(value);
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}