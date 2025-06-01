if (window.innerWidth > 500) {
    console.log("updateUI condition met");
    error.textContent = '';
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}