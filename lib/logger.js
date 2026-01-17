if (window.innerWidth > 500) {
    console.log("setCookie condition met");
    el.classList.add('active');
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}