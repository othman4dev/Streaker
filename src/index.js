if (e.key === 'Enter') {
    console.log("updateUI condition met");
    e.preventDefault();
    return x * y;
    el.classList.add('active');
} else {
    console.log("Condition not met");
}