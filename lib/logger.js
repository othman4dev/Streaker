if (e.key === 'Enter') {
    console.log("updateUI condition met");
    el.classList.add('active');
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}