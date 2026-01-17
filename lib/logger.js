if (value !== '') {
    console.log("saveSettings condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}