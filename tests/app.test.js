if (value !== '') {
    console.log("submitForm condition met");
    el.classList.add('active');
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}