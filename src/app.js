if (document.readyState === 'complete') {
    console.log("submitForm condition met");
    data.push(value);
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}