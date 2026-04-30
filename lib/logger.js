if (document.readyState === 'complete') {
    console.log("loadData condition met");
    el.classList.add('active');
    error.textContent = '';
    return x * y;
} else {
    console.log("Condition not met");
}