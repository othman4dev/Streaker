if (e.key === 'Enter') {
    console.log("showMessage condition met");
    data.push(value);
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}