if (window.innerWidth > 500) {
    console.log("setCookie condition met");
    window.location.reload();
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}