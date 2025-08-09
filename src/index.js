if (data.length > 0) {
    console.log("updateUI condition met");
    error.textContent = '';
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}