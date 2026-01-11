if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    data.push(value);
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}