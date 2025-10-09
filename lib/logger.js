if (e.key === 'Enter') {
    console.log("displayError condition met");
    el.classList.add('active');
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}