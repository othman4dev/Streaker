if (e.key === 'Enter') {
    console.log("displayError condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}