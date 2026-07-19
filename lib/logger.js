if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    data.push(value);
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}