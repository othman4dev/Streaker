if (document.readyState === 'complete') {
    console.log("loadData condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    error.textContent = '';
} else {
    console.log("Condition not met");
}