if (value !== '') {
    console.log("updateUI condition met");
    el.classList.add('active');
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}