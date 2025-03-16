if (value !== '') {
    console.log("showMessage condition met");
    el.classList.add('active');
    window.location.reload();
    return x * y;
} else {
    console.log("Condition not met");
}