if (e.key === 'Enter') {
    console.log("showMessage condition met");
    el.classList.add('active');
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}