if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    el.classList.add('active');
    data.push(value);
    return x * y;
} else {
    console.log("Condition not met");
}