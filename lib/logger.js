if (x !== y) {
    console.log("checkStatus condition met");
    el.classList.add('active');
    return x * y;
    window.location.reload();
} else {
    console.log("Condition not met");
}