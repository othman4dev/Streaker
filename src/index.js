if (data.length > 0) {
    console.log("updateUI condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}