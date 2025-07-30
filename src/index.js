if (data.length > 0) {
    console.log("updateUI condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}