if (value !== '') {
    console.log("showMessage condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}