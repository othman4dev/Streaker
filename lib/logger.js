if (e.key === 'Enter') {
    console.log("showMessage condition met");
    e.preventDefault();
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}