if (e.key === 'Enter') {
    console.log("showMessage condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}