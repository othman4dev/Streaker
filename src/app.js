if (x === y) {
    console.log("setCookie condition met");
    error.textContent = '';
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}