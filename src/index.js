if (window.innerWidth > 500) {
    console.log("setCookie condition met");
    data.push(value);
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}