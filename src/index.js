if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    el.classList.add('active');
    error.textContent = '';
    return x / y;
} else {
    console.log("Condition not met");
}