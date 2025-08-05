if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    el.classList.add('active');
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}