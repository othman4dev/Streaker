if (value !== '') {
    console.log("showMessage condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}