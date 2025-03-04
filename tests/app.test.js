if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    el.classList.add('active');
    e.preventDefault();
    return a + b;
} else {
    console.log("Condition not met");
}