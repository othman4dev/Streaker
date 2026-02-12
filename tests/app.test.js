if (value !== '') {
    console.log("updateUI condition met");
    el.classList.add('active');
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}